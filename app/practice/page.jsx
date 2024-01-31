"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function PracticePage({ searchParams }) {
  return (
    <>
      <Header />
      <section className="pb-20">
        <div className="relative h-[70vh] w-full bg-cover">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="absolute z-30 bottom-20 left-10 md:left-20"
          >
            <Link href="/" className="hover:no-underline">
              <div className="flex gap-1 text-lightGray hover:bg-lightGray/50 rounded-md hover:text-black cursor-pointer transition-all duration-300 w-28 justify-center items-center p-2">
                <IoIosArrowRoundBack size={30} />
                <p className="text-[20px]">Назад </p>
              </div>
            </Link>
            <h1 className=" text-lightGray pt-5">{searchParams.title}</h1>
          </motion.div>
          <Image
            src="/practice/img.jpg"
            alt="img"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-10" />
        </div>
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="flex py-8 xl:py-12 items-center flex-col md:flex-row gap-15 xl:gap-20 relative"
          >
            <h3 className="text-[18px] sm:text-[30px] border-none md:border-r md:border-black md:pr-14 text-center pb-7 md:pb-0">
              Про практику
            </h3>
            <motion.p className="text-justify md:text-left">
              {searchParams.description}
            </motion.p>
          </motion.div>
          <div>
            <motion.h3
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[16px] sm:text-[30px] pb-8 md:pb-12 text-center md:text-left"
            >
              Надаємо наступні послуги:
            </motion.h3>
            <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-10 flex flex-col ">
              {searchParams.services.map((service, i) => {
                return (
                  <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    key={i}
                    className=" rounded-md bg-darkGreen/70 flex flex-col relative items-center justify-center px-3 pt-12 pb-10 shadow-xl"
                  >
                    <div className="rounded-md bg-lightGray flex p-5 h-2 w-2 items-center justify-center absolute top-3 right-3 shadow-md">
                      <p className="font-bold">{i}</p>
                    </div>
                    <p className="font-semibold text-center">{service}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
