"use client";

import { useModalStore } from "@/store";
import Form from "./Form";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Modal = () => {
  const setModalIsOpen = useModalStore((state) => state.setModalIsOpen);
  return (
    <div className="hiddem md:fixed z-50 top-0 left-0 w-full h-full bg-black/60">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="fixed z-40 border border-black shadow-md bg-darkGreen p-3 md:pt-3 pt-4 text-center md:top-[15%] md:left-[25%] md:w-[50%] top-0 left-0 w-full  h-full md:h-auto rounded-md"
      >
        <IoCloseOutline
          size={40}
          className="absolute top-3 right-3 cursor-pointer hover:bg-black hover:text-darkGreen rounded-md transition-all duration-200"
          onClick={setModalIsOpen}
        />
        <p className="text-[20px] font-semibold text-center py-10">
          Професійні юристи зв&#39;яжуться з вами в найкоротші терміни
        </p>
        <Form />
      </motion.div>
    </div>
  );
};

export default Modal;
