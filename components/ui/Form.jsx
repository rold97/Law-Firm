import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useModalStore } from "@/store";

const Form = () => {
  const notifySuccess = () => toast.success("Надіслано!");
  const notifyError = () => toast.error("Упс! Щось пішло не так...");
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0r5ddub",
        "template_9t1tydk",
        form.current,
        "z0UcfQey-fIHeOxbc"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          notifyError();
          form.current.reset();
        }
      );
  };

  return (
    <form
      ref={form}
      className="flex flex-col border-none w-full h-full border-md gap-6 md:gap-10 px-10"
      onSubmit={sendEmailHandler}
    >
      <div className="flex flex-col">
        <label for="name">Прізвище, ім&#39;я, по-батькові</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Повне ім'я"
          required
          className="px-3 py-3 mt-1 rounded-md bg-lightGray placeholder:text-darkGray/80"
        />
      </div>
      <div className="flex flex-col">
        <label for="phone">Ваш номер телефону</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Номер телефону"
          required
          className="px-3 ring-transparent py-3 mt-1 rounded-md bg-lightGray placeholder:text-darkGray/80"
        />
      </div>
      <div className="flex flex-col">
        <label for="message">Коротко опишіть вашу проблему чи питання</label>
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Ваше питання"
          required
          className="px-3 py-3 mt-1 h-40 rounded-md bg-lightGray placeholder:text-darkGray/80"
        />
      </div>

      <input
        type="submit"
        value="Надіслати"
        className="py-3 bg-black rounded-md text-lightGray border-none mb-10 hover:cursor-pointer hover:bg-black/90 transition-all duration-300 font-semibold"
      />
      <Toaster />
    </form>
  );
};

export default Form;
