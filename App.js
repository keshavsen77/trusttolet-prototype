
import { useState } from "react";
import "./App.css";

const flats = [
  {
    id: 1,
    title: "2BHK Near MP Nagar",
    location: "Bhopal, MP Nagar",
    image: "/flat1.jpg",
    time: "5 mins ago",
    verified: true,
    status: "Available"
  },
  {
    id: 2,
    title: "1RK in Arera Colony",
    location: "Bhopal, Arera Colony",
    image: "/flat2.jpg",
    time: "2 hours ago",
    verified: true,
    status: "Rented"
  }
];

export default function TrustToLetApp() {
  const [query, setQuery] = useState("");

  const filteredFlats = flats.filter(flat =>
    flat.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ color: "#2563eb" }}>TrustToLet 🏡</h1>
      <p style={{ color: "#6b7280" }}>Verified Rentals. Zero Fraud.</p>
      <input
        type="text"
        placeholder="Search flat location or type..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          margin: "1rem 0",
          borderRadius: "0.5rem",
          border: "1px solid #ccc"
        }}
      />

      {filteredFlats.map(flat => (
        <div key={flat.id} style={{
          border: "1px solid #ccc",
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "1rem"
        }}>
          <img src={flat.image} alt={flat.title} style={{
            borderRadius: "0.5rem",
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }} />
          <h2>{flat.title} {flat.verified && "✔️"}</h2>
          <p>{flat.location}</p>
          <p>{flat.time}</p>
          <p style={{
            color: flat.status === "Rented" ? "red" : "green"
          }}>{flat.status}</p>
        </div>
      ))}
    </div>
  );
}
