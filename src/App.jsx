import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then(r => r.json())
      .then(setData)
      .catch(e => setErr(String(e)));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Frontend Web</h1>
      <p><strong>API_URL:</strong> {API_URL}</p>
      {err && <p style={{color:"red"}}>Erro: {err}</p>}
      {data ? (
        <div style={{ marginTop: 12 }}>
          <p><strong>Mensagem:</strong> {data.message}</p>
          <p><strong>Versão:</strong> {data.version}</p>
          <p><strong>Timestamp:</strong> {data.ts}</p>
        </div>
      ) : (
        !err && <p>Carregando...</p>
      )}
    </div>
  );
}
