import Login     from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";

const { useState } = React;
const h = React.createElement;

function App() {
  const [usuario, setUsuario] = useState(null);

  if (usuario) {
    return h(Dashboard, { usuario, onLogout: () => setUsuario(null) });
  }

  return h(Login, { onLogin: setUsuario });
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
