import React, { useState } from "react";
import { motion } from "framer-motion";

function CollapseCard() {
  const songs = ["Tornado of souls", "Holy Wars", "Five Magics"];

  const [isOpen, setOpen] = useState(null);

  const cardVariants = {
    open: {
      height: 170,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      height: 90,
      transition: { staggerChildren: 0.1, when: "afterChildren" },
    },
  };

  const songVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <div>
      <div className="colapse_body">
        <motion.div
          variants={cardVariants}
          initial={false}
          onTap={() => {
            isOpen ? setOpen(false) : setOpen(true);
          }}
          animate={isOpen ? "open" : "closed"}
          className="card"
        >
          💿MEGADETH <motion.div variants={arrowVariants}>⬆</motion.div>
          {songs.map((song) => (
            <motion.div variants={songVariants} className="song" key={song}>
              {song}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CollapseCard;
