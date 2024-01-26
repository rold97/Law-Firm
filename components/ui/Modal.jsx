"use client";

import Form from "./Form";
import { IoCloseOutline } from "react-icons/io5";

const Modal = () => {
  return (
    <div className="hiddem md:fixed z-50 top-0 left-0 w-full h-full bg-black/80">
      <div className="fixed z-40 border border-black shadow-md bg-darkGreen p-3 md:pt-3 pt-24 text-center md:top-[15%] md:left-[25%] md:w-[50%] top-0 left-0 w-full  h-full md:h-auto rounded-md">
        <IoCloseOutline
          size={40}
          className="absolute top-3 right-3 cursor-pointer hover:bg-black hover:text-darkGreen rounded-md transition-all duration-200"
        />
        <p className="text-[20px] font-semibold text-center py-10">
          Професійні юристи зв'яжуться з вами в найкоротші терміни
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
// position: fixed;
// z-index: 200;
// border: 1px solid #eee;
// box-shadow: 0 2px 2px #ccc;
// background-color: white;
// padding: 10px;
// text-align: center;
// box-sizing: border-box;
// top: 30%;
// left: 25%;
// width: 50%;
// transition: all 0.5s ease-out;
