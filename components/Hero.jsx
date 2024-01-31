"use client";
import { Button } from "./ui/button";
// import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Link } from "react-scroll";
import Modal from "./ui/Modal";
import { useModalStore } from "@/store";

const Hero = () => {
  const modal = useModalStore((state) => state.modalIsOpen);
  const setModalIsOpen = useModalStore((state) => state.setModalIsOpen);

  return (
    <section
      className="bg-bgHero  bg-no-repeat relative xl:bg-cover h-[95vh] xl:py-0 w-full"
      id="home"
    >
      {modal ? <Modal /> : ""}
      <div className="container mx-auto h-full relative ">
        <div className="flex items-center md:h-[90%] h-full">
          <div className="xl:w-[80%] w-full text-center xl:text-left pt-28 sm:pt-0">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-lightGray "
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
              viewport={{ once: true, amount: 0.4 }}
              className="text-lightGray py-6 text-[16px] sm:text-[18px]"
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
              viewport={{ once: true, amount: 0.4 }}
              className="flex-col xl:flex-row items-center justify-center gap-[20px] sm:gap-[50px]"
            >
              <Button
                onClick={setModalIsOpen}
                variant="default"
                size="default"
                className="uppercase mr-0 md:mr-8"
              >
                Замовити консультацію юриста
              </Button>
              <Link to="practices" spy={true} smooth={true}>
                <Button
                  variant="destructive"
                  size="default"
                  className="hidden md:block uppercase mt-8 xl:mt-0"
                >
                  Ознайомитись з нашими послугами
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
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
        viewport={{ once: true, amount: 0.4 }}
        className="w-[60%] h-[10rem] absolute -bottom-12 right-0 bg-darkGreen rounded-md z-20 hidden xl:block shadow-md"
      />
    </section>
  );
};

export default Hero;
