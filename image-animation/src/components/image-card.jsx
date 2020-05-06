import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ImageCard() {
  //using a api call
  // const [image, setImage] = useState();

  // useEffect(() => {
  //   imageHandler();
  // });

  // const imageHandler = async () => {
  //   fetch("https://source.unsplash.com/random/300x300").then((response) => {
  //     setImage(response.url);
  //   });
  // };
  // const hello = async () => {
  //   console.log("sss");
  // };
  // onClick={imageHandler}

  return (
    <div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="card-container"
      >
        <img
          src="https://source.unsplash.com/random/300x300"
          alt="image-photos"
        />
      </motion.div>
      <div className="controls"></div>
    </div>
  );
}

export default ImageCard;
