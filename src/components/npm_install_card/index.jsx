import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"

import copyIco from "./img/Copy.png";
import tickIco from "./img/tick.png";

export default function NpmInstallCard() {
  const [npmImgSrc, setNpmImgSrc] = useState(copyIco);
  function copyNpmPackage() {
    navigator.clipboard.writeText("npm install grab-wizard");
    setNpmImgSrc(tickIco);
    setTimeout(() => {
      setNpmImgSrc(copyIco);
    }, 2000);
  }
  return (
    <div
      onClick={() => copyNpmPackage()}
      className="flex justify-around mx-auto sm:max-w-lg items-center bg-burntSienna text-forestGreen w-full p-7 rounded-lg text-xl transition-all cursor-pointer active:opacity-60 hover:opacity-80 sm:text-4xl"
    >
      <motion.div
        key={npmImgSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0,1] }}
        transition={{ duration: .5 }}
        className=""
      >
        <img src={npmImgSrc} alt="copy" width={30} height={30} />
      </motion.div>

      <h3 className="">npm i grab-wizard</h3>
    </div>
  );
}
