import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const notify = () => toast.success("Надіслано!");

  return (
    <form
      className="flex flex-col border-none w-full h-full border-md gap-10 px-10"
      onSubmit={submitHandler}
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
        <label for="describe">Коротко опишіть вашу проблему</label>
        <textarea
          id="describe"
          type="text"
          name="describe"
          placeholder="Ваше питання"
          className="px-3 py-3 mt-1 h-40 rounded-md bg-lightGray placeholder:text-darkGray/80"
        />
      </div>

      <input
        type="submit"
        value="Надіслати"
        className="py-3 bg-black rounded-md text-lightGray border-none mb-10 hover:cursor-pointer hover:bg-black/90 transition-all duration-300 font-semibold"
        required
        onClick={notify}
      />
      <Toaster />
    </form>
  );
};

export default Form;
