import React from "react";

function NavBar(name) {
  return (
    <nav className="nav">
      <h2 className="title">{name.name}</h2>
    </nav>
  );
}

export default NavBar;
