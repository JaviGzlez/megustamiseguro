// src/components/admin/AvisosRenovacion.jsx
//
// Banner que sale automáticamente arriba del panel (para admin y
// gestores) mostrando las pólizas que vencen en los próximos 60
// días, para poder llamar al cliente y ofrecerle renovar antes de
// que caduque. No requiere ninguna acción del usuario: se calcula
// solo al entrar, sin pestañas ni filtros que haya que buscar.

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import "./AvisosRenovacion.css";

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const venc = new Date(fecha);
  return Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
}

function AvisosRenovacion() {
  const [avisos, setAvisos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      const hoy = new Date();
      const en60dias = new Date();
      en60dias.setDate(hoy.getDate() + 60);

      const { data, error } = await supabase
        .from("polizas")
        .select("id, cliente_nombre, cliente_telefono, tipo_seguro, fecha_vencimiento")
        .eq("estado", "ACTIVA")
        .gte("fecha_vencimiento", hoy.toISOString().slice(0, 10))
        .lte("fecha_vencimiento", en60dias.toISOString().slice(0, 10))
        .order("fecha_vencimiento", { ascending: true });

      if (!error && data) setAvisos(data);
      setCargando(false);
    };
    cargar();
  }, []);

  if (cargando || avisos.length === 0) return null;

  return (
    <div className="avisosRenovacion">
      <div className="avisosRenovacionTitulo">
        ⚠️ {avisos.length}{" "}
        {avisos.length === 1
          ? "póliza vence pronto"
          : "pólizas vencen pronto"}{" "}
        — llama al cliente para renovar antes de que caduque
      </div>
      <div className="avisosRenovacionLista">
        {avisos.map((p) => {
          const dias = diasHasta(p.fecha_vencimiento);
          const urgente = dias <= 30;
          return (
            <div
              key={p.id}
              className={`avisoItem ${urgente ? "avisoItem-urgente" : ""}`}
            >
              <span className="avisoCliente">{p.cliente_nombre}</span>
              <span className="avisoTipo">{p.tipo_seguro}</span>
              {p.cliente_telefono && (
                <span className="avisoTelefono">📞 {p.cliente_telefono}</span>
              )}
              <span className="avisoDias">
                {dias === 0 ? "vence hoy" : `${dias} días`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvisosRenovacion;
