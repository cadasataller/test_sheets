const { useState } = React;
const h = React.createElement;

export default function Campo({ label, tipo, valor, onChange, hasError }) {
  const [mostrar, setMostrar] = useState(false);
  const esPwd    = tipo === "password";
  const inputTipo = esPwd ? (mostrar ? "text" : "password") : tipo;

  return h("div", { className: "field" },
    h("label", null, label),
    h("div", { className: "input-wrap" },
      h("input", {
        type: inputTipo,
        value: valor,
        className: hasError ? "error-input" : "",
        onInput: e => onChange(e.target.value),
      }),
      esPwd && h("button", {
        className: "show-btn",
        type: "button",
        onClick: () => setMostrar(!mostrar)
      }, mostrar ? "ocultar" : "mostrar")
    )
  );
}
