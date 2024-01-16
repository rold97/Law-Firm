"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const AboutUs = () => {
  return (
    <section
      className="h-[720px] flex items-center bg-gradient-to-br from-lightGray to-gray"
      id="aboutUs"
    >
      <div className="container md:grid md:grid-cols-3 items-center justify-between">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="hidden bg-darkGreen w-60 h-40 rounded-md md:grid grid-cols-3 grid-rows-2 shadow-xl"
        >
          <p className="flex col-span-2 text-xl font-semibold items-center justify-center">
            Про нас
          </p>
          <div className=" flex items-center justify-end pr-9 col-span-3">
            <IoIosArrowRoundForward size={50} />
          </div>
        </motion.div>
        <div className="col-span-2 md:text-left text-center">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            Досвідчені юристи,
            <span className="text-darkGreen">індивідуальний</span> підхід і
            висока якість сервісу
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="pt-8 "
          >
            Ми прагнемо надавати нашим клієнтам якісні та професійні послуги, а
            також ефективно захищати їхні інтереси в суді та поза ним. Ми готові
            допомогти нашим клієнтам у будь-яких юридичних питаннях, чи то
            податкові спори, чи то корпоративне право, чи то інтелектуальна
            власність, чи то трудові спори, чи то нерухомість, чи то інші галузі
            права.
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="pt-8"
          >
            <Button variant="secondary" size="default" className="uppercase">
              <HiOutlinePencilSquare size={28} className="mr-4" />
              Записатись на консультацію
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
