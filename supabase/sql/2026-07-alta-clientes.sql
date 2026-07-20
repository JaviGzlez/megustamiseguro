-- =============================================================
-- Alta de clientes con acceso a su propia póliza
-- Ejecutar en: Supabase → SQL Editor → New query
-- =============================================================

-- 1) Cuando se crea un usuario nuevo (por invitación), se le crea
--    automáticamente su fila en "perfiles". Si no se le indica un
--    rol concreto (admin/gestor), se le pone "cliente" por defecto.
create or replace function public.crear_perfil_para_nuevo_usuario()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.perfiles (id, email, rol)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'rol', 'cliente')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.crear_perfil_para_nuevo_usuario();

-- 2) RLS: un cliente autenticado solo puede VER las pólizas donde
--    su email coincide con "cliente_email". No puede editar ni borrar.
--    (Esto se suma a las políticas de admin/gestor que ya tengas;
--    si tienes dudas de si chocan con algo, revisa
--    Authentication → Policies → tabla "polizas" antes de ejecutar).
alter table public.polizas enable row level security;

drop policy if exists "Cliente ve sus propias polizas" on public.polizas;

create policy "Cliente ve sus propias polizas"
on public.polizas
for select
to authenticated
using (
  cliente_email = auth.jwt() ->> 'email'
);
