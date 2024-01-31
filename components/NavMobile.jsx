"use client";

import { useState } from "react";
import { RiMenu2Line, RiHome5Fill, RiPhoneFill } from "react-icons/ri";

import { IoClose, IoCloseOutline } from "react-icons/io5";

import { FaUsers } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

import Link from "next/link";
import { Button } from "./ui/button";
import { useModalStore } from "@/store";

const links = [
  { icon: <RiHome5Fill />, path: "home", name: "Головна", offset: 0 },
  { icon: <FaUsers />, path: "aboutUs", name: "Про нас", offset: -50 },
  { icon: <GoLaw />, path: "practices", name: "практики", offset: 0 },
  { icon: <BiLike />, path: "whyUs", name: "Чому ми", offset: 0 },
  {
    icon: <RiPhoneFill />,
    path: "contacts",
    name: "Контакти",
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setModalIsOpen = useModalStore((state) => state.setModalIsOpen);

  const openModal = () => {
    setIsOpen(false);
    setModalIsOpen();
  };

  return (
    <div className={containerStyles}>
      {/* nav trigger btn */}
      <div
        className="cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenu2Line className="text-3xl text-white hover:text-darkGreen transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black/95 fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        {/* nav close btn */}
        <div className="flex flex-col items-center justify-between h-full">
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 right-8 top-10 bg-green flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href="/" className="hover:no-underline">
            <div className="w-[200px]">
              <h1 className="text-xl text-lightGray text-center border-b border-lightGray tracking-tighter">
                Vorobets & Pylypiuk
              </h1>
              <p className="text-center leading-[30px] text-lightGray">
                Law Firm
              </p>
            </div>
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-14">
            {links.map((link, i) => {
              return (
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  key={i}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3 hover:text-darkGreen transition-all duration-300 cursor-pointer"
                >
                  <div className={iconStyles}>{link.icon}</div>
                  <p className={linkStyles}>{link.name}</p>
                </ScrollLink>
              );
            })}
          </div>
          {/* btn */}

          <Button
            variant="destructive"
            size="default"
            className="uppercase text-black/80 text-[12px]"
            onClick={openModal}
          >
            Записатись на консультацію
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
