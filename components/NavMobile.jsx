"use client";

import { useState } from "react";
import { RiMenu2Line, RiHome5Fill } from "react-icons/ri";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  { icon: <RiHome5Fill />, path: "home", name: "home", offset: 0 },
  { icon: <FaUsers />, path: "about", name: "about", offset: -50 },
  { icon: <FaEnvelope />, path: "location", name: "location", offset: 0 },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">Book a table!</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
