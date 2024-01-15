"use client";

import { Button } from "./ui/button";
// import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section
      className="bg-bgHero  bg-no-repeat relative xl:bg-cover h-[95vh] xl:py-0 "
      id="home"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex items-center h-[90%]">
          <div className="xl:w-[80%] w-full text-center xl:text-left">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className=" text-lightGray "
            >
              Змініть сприйняття юриспруденції разом із{" "}
              <span className="text-darkGreen">
                Vorobets & Pylypiuk Law Firm
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-lightGray py-6 text-[18px]"
            >
              Vorobets & Pylypiuk — системна юридична фірма, яка супроводжує Вас
              у складний період Вашого життя. <br />
              Кваліфікована команда юристів готова швидко проконсультувати вас
              щодо будь-якого запиту.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="flex-col xl:flex-row items-center justify-center gap-[50px]"
            >
              <Button
                variant="default"
                size="default"
                className="uppercase mr-0 md:mr-8"
              >
                Замовити консультацію юриста
              </Button>
              <Button
                variant="destructive"
                size="default"
                className="uppercase mt-8 xl:mt-0"
              >
                Ознайомитись з нашими послугами
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="hidden xl:flex items-end justify-start "
        >
          <div className=" flex gap-5 z-20 text-[18px] items-center justify-between">
            <p className="text-lightGray ">
              Прокрутіть нище, щоб дізнатись більше
            </p>
            <IoIosArrowRoundDown className="text-lightGray" size={40} />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="w-[60%] h-[10rem] absolute -bottom-12 right-0 bg-darkGreen rounded-md z-20 hidden xl:block shadow-md"
      />
    </section>
  );
};

export default Hero;
