import React, { useState } from "react";
import { motion } from "framer-motion";

import CachingData from "../../data/index.json";
import TextCard from "../../components/text_card";
import Hash from "../../animations/Hash";
import ViewPort from "../../components/utils/ViewPort";

import lru_text_ico from "./img/lru.png";
import file_ico from "./img/file.png";

export default function Lru() {
  const [inView, setInView] = useState(false);
  return (
    <div className="flex flex-col justify-evenly w-full h-full box-border md:flex-row-reverse items-center md:justify-around">
      <ViewPort
        getViewStatus={setInView}
        delay={300}
        className={"relative w-full md:w-2/5"}
      >
        <motion.div
          key={inView}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:px-10"
        >
          <div className="  flex justify-center md:justify-end  gap-3 items-center h-max">
            <img
              alt="least recently used"
              src={lru_text_ico}
              className=" w-2/4"
            />
            <motion.div
              key={inView}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: inView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className=" h-full"
            >
              <img alt="file" src={file_ico} className="w-2/4 md:w-40" />
            </motion.div>
          </div>
        </motion.div>
      </ViewPort>
      <TextCard data={CachingData[2]} />
    </div>
  );
}
