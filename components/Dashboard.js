const h = React.createElement;

export default function Dashboard({ usuario, onLogout }) {
  return h("div", { className: "login-wrap" },
    h("div", { className: "card dashboard" },
      h("div", { className: "avatar" }, "A"),

      h("p", { className: "welcome" },
        "Hola, ",
        h("span", { className: "welcome-accent" }, usuario)
      ),
      h("p", { className: "welcome-sub" }, "sesión iniciada correctamente"),

      h("div", { className: "stats" },
        h("div", { className: "stat" },
          h("div", { className: "stat-val" }, "10"),
          h("div", { className: "stat-label" }, "usuarios")
        ),
        h("div", { className: "stat" },
          h("div", { className: "stat-val" }, "1"),
          h("div", { className: "stat-label" }, "sheet")
        ),
        h("div", { className: "stat" },
          h("div", { className: "stat-val" }, "∞"),
          h("div", { className: "stat-label" }, "lecturas")
        )
      ),

      h("button", { className: "btn-logout", onClick: onLogout }, "cerrar sesión")
    )
  );
}
