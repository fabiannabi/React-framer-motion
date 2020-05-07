import React, { useState } from "react";
import { motion } from "framer-motion";

function ButtonChange() {
  const [isDark, setDark] = useState(false);

  const BackgroundColor = {
    dark: {
      background: "black",
    },
    light: { background: "cornsilk" },
  };

  const BtnBackgroundColor = {
    dark: {
      color: "black",
      background: "cornsilk",
    },
    light: { color: "white", background: "black" },
  };

  return (
    <motion.div
      variants={BackgroundColor}
      animate={isDark ? "dark" : "light"}
      className="background"
    >
      <motion.button
        variants={BtnBackgroundColor}
        className="change"
        onClick={() => setDark(!isDark)}
      >
        click
      </motion.button>
    </motion.div>
  );
}

export default ButtonChange;
