"use client";
import Link from "next/link";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="bg-black/60 shadow-xl py-2 z-50 fixed top-0 w-full left-0 right-0 transition-all duration-200 ">
      <div className="container mx-auto flex gap-[40px] justify-between items-center">
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
        <Nav
          containerStyles="hidden xl:flex gap-x-12 text-white"
          linkStyles="text-lightGray hover:text-darkGreen uppercase"
        />

        <NavMobile
          containerStyles="xl:hidden text-white hover:text-darkGreen"
          iconStyles="text-3xl hover:text-darkGreen"
          linkStyles="uppercase text-lightGray hover:text-darkGreen transition-all duration-300 font-medium"
        />
      </div>
    </header>
  );
};

export default Header;
