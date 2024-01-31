import React, { useState } from "react";

export function LoginPage() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [username, setUsername] = useState("exemple@exemple.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    // Logique de connexion simulée (à remplacer par une authentification sécurisée côté serveur)
    if (username === "exemple@exemple.com" && password === "motdepasse") {
      setIsLoggedIn(true);
      console.log("Connecté avec succès!");
    } else {
      setIsLoggedIn(false);
      console.log(
        "Échec de la connexion. Vérifiez vos informations d'identification."
      );
    }
  };

  return (
    <div className="login">
      <h1 className="text-center">Welcome to App ClockIn and ClockOut Page</h1>
      <h2 className="text-center">Sign In to App</h2>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <form action="" style={style}>
          <InputUsername
            value={username}
            onChange={handleUsernameChange}
            label={"Username"}
          />
          <br />
          <InputPassWord
            value={password}
            onChange={handlePasswordChange}
            label="Password"
          />
          <br />
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      )}
    </div>
  );
}

function InputUsername({ value, onChange, label }) {
  return (
    <>
      <label htmlFor="userName">{label}</label>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

function InputPassWord({ value, onChange, label }) {
  return (
    <>
      <label htmlFor="password">{label}</label>
      <input
        className="form-control"
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
