import React from "react";
import { useAuth } from "../contexts/AuthContext";

export const Login: React.FC = () => {
  const { loginWithGoogle, loginAsGuest, loading } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Bíblia Show Plus</h1>
      <button onClick={loginWithGoogle} disabled={loading} style={{ margin: 10 }}>
        Entrar com Google
      </button>
      <button onClick={loginAsGuest} disabled={loading} style={{ margin: 10 }}>
        Jogar como Convidado
      </button>
      {loading && <p>Carregando...</p>}
    </div>
  );
};
