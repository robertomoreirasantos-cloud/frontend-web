import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Lista de Produtos</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              background: "#f9f9f9",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <h2 style={{ margin: "0 0 5px" }}>{p.name}</h2>
            <p style={{ margin: "0 0 5px", color: "#555" }}>{p.description}</p>
            <strong style={{ color: "#007bff" }}>Preço: R$ {p.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
