// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [cargando, setCargando] = useState(true);

  const cargarPerfil = async (userId) => {
    if (!userId) {
      setPerfil(null);
      return;
    }
    const { data } = await supabase
      .from("perfiles")
      .select("*")
      .eq("id", userId)
      .single();
    setPerfil(data || null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      await cargarPerfil(data.session?.user?.id);
      setCargando(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, nuevaSesion) => {
        setSession(nuevaSesion);
        await cargarPerfil(nuevaSesion?.user?.id);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const iniciarSesion = (email, password) =>
    supabase.auth.signInWithPassword({ email, password });

  const cerrarSesion = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider
      value={{ session, perfil, cargando, iniciarSesion, cerrarSesion }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
