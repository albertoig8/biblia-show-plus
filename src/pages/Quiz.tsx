import React from "react";
import { useAuth } from "../contexts/AuthContext";

export const Quiz: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo(a), {user?.displayName}</h2>
      <p>Aqui começa o quiz!</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
};
