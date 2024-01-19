import { RiPhoneFill } from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className=" bg-darkGreen py-20" id="contacts">
      <div className="grid flex-col md:grid-cols-3 mx-auto container items-center gap-10">
        {/* col 1 */}
        <div className="flex flex-col gap-8 justify-center items-center">
          {/* logo */}
          <Link href="/" className="hover:no-underline">
            <div className="w-[200px]">
              <h1 className="text-xl text-black text-center border-b border-black/70 tracking-tighter">
                Vorobets & Pylypiuk
              </h1>
              <p className="text-center leading-[30px] text-black/70 font-medium">
                Law Firm
              </p>
            </div>
          </Link>
          <p>&copy; 2024 | Всі права захищені</p>
        </div>
        {/* col2 */}
        <div className="hidden md:flex items-center justify-center">
          <Button
            variant="destructive"
            size="default"
            className="uppercase text-black/80"
          >
            Записатись на консультацію
          </Button>
        </div>
        {/* col 3 */}
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex items-center justify-center gap-2">
            <RiPhoneFill size={35} />
            <div className="flex-col">
              <p>+380 (66)-304-88-31 - Арсен</p>
              <p>+380 (97)-686-46-33 - Олександр</p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <Link href="https://www.facebook.com/">
              <FaFacebookF
                size={40}
                className="rounded-full border text-black border-black p-[6px] hover:bg-black hover:text-darkGreen transition-all duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <FaInstagram
                size={40}
                className="rounded-full border text-black border-black p-[6px] hover:bg-black hover:text-darkGreen transition-all duration-300 cursor-pointer"
              />
            </Link>
            <Link href="https://telegram.org/">
              <FaTelegramPlane
                size={40}
                className="rounded-full border text-black border-black p-[6px] hover:bg-black hover:text-darkGreen transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
