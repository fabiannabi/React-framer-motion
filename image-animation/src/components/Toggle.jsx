import React, { useState } from "react";
import { motion } from "framer-motion";

function Toggle() {
  /*se usa un state como switch de true o false//
  funciona con click en el div, el cual tiene una funcion que cambia el valor de setToggle al contrario*/

  const [active, setToggle] = useState(true);

  /*se hace una variable con nombre : Variants que sirve para acumular varios estilos de animaciones
 bajo un nombre que despues se puede utilizar en animation*/

  const variants = {
    active: { background: "aquamarine", rotate: 0 },
    disabled: { background: "coral", rotate: 90 },
  };

  return (
    <div>
      <div className="toggle_body">
        <motion.div
          variants={variants}
          animate={active ? "active" : "disabled"}
          transition={{ duration: 1 }}
          className="toggle_card"
          onClick={() => setToggle(!active)}
        >
          Click Me
        </motion.div>
      </div>
    </div>
  );
}

export default Toggle;
