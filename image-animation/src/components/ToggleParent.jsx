import React, { useState } from "react";
import { motion } from "framer-motion";

function ToggleParent() {
  const childs = ["one", "two", "three"];
  const [active, setToggle] = useState(false);

  const variants = {
    active: {
      background: "blue",
      transition: { staggerChildren: 0.7, when: "afterChildren" },
    },
    disabled: { background: "Grey" },
  };

  const box = {
    active: { rotate: 90, opacity: 1 },
    disabled: { rotate: 0, opacity: 0.5 },
  };

  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="togglePrnt_body">
        <motion.div
          variants={variants}
          animate={active ? "active" : "disabled"}
          className="togglePrnt_card"
          onClick={() => setToggle(!active)}
        >
          {childs.map((child) => (
            <motion.div
              key={child}
              variants={box}
              className="child-box"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ToggleParent;
