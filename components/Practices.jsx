"use client";

import { FaRegHandshake } from "react-icons/fa";
import { LiaBusinessTimeSolid, LiaSuitcaseSolid } from "react-icons/lia";
import { IoCarOutline, IoFingerPrint, IoBookOutline } from "react-icons/io5";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Practices = () => {
  const practices = [
    {
      icon: <FaRegHandshake size={90} />,
      name: "Медіація/переговори",
    },

    {
      icon: <LiaBusinessTimeSolid size={90} />,
      name: "Господарське право та процес",
    },
    {
      icon: <IoCarOutline size={90} />,
      name: "Адміністративні правопорушення",
    },
    {
      icon: <IoFingerPrint size={90} />,
      name: "Кримінальне право та процеес",
    },
    {
      icon: <LiaSuitcaseSolid size={90} />,
      name: "Цивільне право та процес",
    },
    {
      icon: <MdOutlineFamilyRestroom size={90} />,
      name: "Сімейне право",
    },
    {
      icon: <IoBookOutline size={90} />,
      name: "Інтелектуальна власність",
    },
    {
      icon: <RiGovernmentLine size={90} />,
      name: "Взаємодія з органами державної влади",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-darkGreen to-Green py-32"
      id="practices"
    >
      <div className="container mx-auto">
        <h2 className="text-[48px] flex justify-center xl:hidden">
          Наші послуги
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4 items-center justify-around">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" grid xl:grid-cols-4 md:grid-cols-3 gap-[20px] gap-y-[50px] pt-[30px] justify-center items-center cursor-pointer col-span-3 ml-6"
          >
            {practices.map((practice, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center w-[200px] h-[250px] text-center bg-transparent rounded-md hover:bg-white/20 hover:border border-black pt-5 transition-all duration-300 px-[2.5px]"
                >
                  {practice.icon}
                  <div className="py-6 text-lg font-medium">
                    {practice.name}
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="hidden bg-gray w-48 h-52 rounded-md xl:flex flex-col justify-around itmes-center shadow-xl ml-4"
          >
            <p className="flex text-xl font-semibold items-center justify-center pt-4">
              Наші послуги
            </p>
            <div
              className="flex items-center
                justify-center"
            >
              <IoIosArrowRoundBack size={50} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Practices;
