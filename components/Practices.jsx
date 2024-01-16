"use client";

import { FaRegHandshake } from "react-icons/fa";
import { LiaBusinessTimeSolid, LiaSuitcaseSolid } from "react-icons/lia";
import { IoCarOutline, IoFingerPrint, IoBookOutline } from "react-icons/io5";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

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
      className="bg-gradient-to-br from-darkGreen to-Green h-[900px]"
      id="practices"
    >
      <div className="container mx-auto">
        <h2>Наші практики</h2>
        <div className=" grid grid-cols-4 gap-[50px] pt-[50px] justify-center cursor-pointer">
          {practices.map((practice, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center items-center w-[250px] h-[250px] text-center bg-transparent rounded-md hover:bg-white/20 hover:border border-black pt-5"
              >
                {practice.icon}
                <div className="pt-6 text-lg font-medium">{practice.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Practices;
