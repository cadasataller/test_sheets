import Campo from "./Campo.js";

const { useState, useCallback } = React;
const h = React.createElement;

export default function Login({ onLogin }) {
  const [usuario,  setUsuario]  = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!usuario || !password) {
      setError("completa todos los campos");
      return;
    }
    setCargando(true);
    setError("");

    // Simula delay de red
    await new Promise(r => setTimeout(r, 900));

    if (usuario === "admin" && password === "admin") {
      onLogin(usuario);
    } else {
      setError("usuario o contraseña incorrectos");
      setCargando(false);
    }
  }, [usuario, password]);

  const onKeyDown = e => { if (e.key === "Enter") handleSubmit(); };

  return h("div", { className: "login-wrap", onKeyDown },
    h("div", { className: "badge" }, "sistema seguro"),
    h("h1", null, "Bienvenido"),
    h("p",  { className: "subtitle" }, "ingresa tus credenciales para continuar"),

    h("div", { className: "card" },
      error && h("div", { className: "error-msg" },
        h("span", null, "⚠"), " ", error
      ),

      h(Campo, {
        label: "usuario",
        tipo: "text",
        valor: usuario,
        onChange: setUsuario,
        hasError: !!error
      }),

      h(Campo, {
        label: "contraseña",
        tipo: "password",
        valor: password,
        onChange: setPassword,
        hasError: !!error
      }),

      h("button", {
        className: "btn-login",
        onClick: handleSubmit,
        disabled: cargando
      },
        cargando
          ? [h("span", { key: "s", className: "spinner" }), "verificando..."]
          : "ingresar"
      )
    ),

    h("p", { className: "hint" },
      "credenciales: ",
      h("code", null, "admin"),
      " / ",
      h("code", null, "admin")
    )
  );
}
