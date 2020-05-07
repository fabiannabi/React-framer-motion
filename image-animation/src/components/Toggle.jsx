import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Toggle() {
  /*se usa un state como switch de true o false//
  funciona con click en el div, el cual tiene una funcion que cambia el valor de setToggle al contrario*/

  const [active, setToggle] = useState(true);

  /*se hace una variable con nombre : Variants que sirve para acumular varios estilos de animaciones
 bajo un nombre que despues se puede utilizar en animation*/

  const variants = {
    active: { background: "aquamarine", rotate: 0 },
    disabled: { background: "coral", rotate: 0 },
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="toggle-wrap"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toggle;
