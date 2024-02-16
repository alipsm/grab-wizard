import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import InfoData from "../../data/index.json";
import grabWizardLogoIco from "./img/grab_logo.png";
import cubeIco from "./img/cube.png";
import TextCard from "../../components/text_card";
import ViewPort from "../../components/utils/ViewPort";
export default function Info() {
  const [inView, setInView] = useState(false);

  const memoizedTextCard = useMemo(() => <TextCard data={InfoData[0]} />, []);
  return (
    <div className="flex flex-col justify-around w-full h-full box-border md:flex-row-reverse md:items-center">
      <ViewPort
        getViewStatus={setInView}
        delay={300}
        className={"relative w-full md:w-2/5"}
      >
        <motion.div
          key={inView}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full md:px-10"
        >
          <div className=" relative  flex justify-center flex-col md:justify-end  gap-3 items-center h-max">
            <img
              alt="least recently used"
              src={grabWizardLogoIco}
              className=" w-2/5 "
            />
            <img alt="cube" src={cubeIco} className=" w-1/12 top-10 left-1/3  absolute animate-pulse" />
            <img alt="cube" src={cubeIco} className=" w-1/12 top-10 right-1/3 absolute rotate-45 animate-pulse" />
            <img alt="cube" src={cubeIco} className=" w-1/12 top-0 md:-top-10  absolute rotate-12 animate-pulse" />
            <motion.div
              key={inView}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: inView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className=" h-full pt-5"
            >
              <p className="text-xl md:text-5xl text-forestGreen"><strong>Grab Wizard</strong></p>
              <p className=" text-base md:text-2xl text-center">Be a magican</p>

            </motion.div>
          </div>
        </motion.div>
      </ViewPort>

      {/* <ViewPort getViewStatus={setInView} delay={300} triggerOnce> */}
      {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : .5 }}
          transition={{ duration: 1, delay: .5 }}
        > */}
      {memoizedTextCard}
      {/* </motion.div> */}
      {/* </ViewPort> */}
    </div>
  );
}
