import React from "react";

const WhyUs = () => {
  const ourAdvanteges = [
    {
      title: "Швидкість реагування",
      description:
        "Інтереси і потреби клієнта понад усе. Ми на зв’язку з клієнтом 24 години на добу. У разі виникнення непередбачених ситуацій - наші співробітники завжди готові допомогти.",
    },
    {
      title: "Командна робота",
      description:
        "Ефективність нашої роботи залежить від нашої згуртованості. Взаємодія юристів дозволяє нам максимально ефективно виконувати найрізноманітніші завдання клієнтів.",
    },
    {
      title: "Конфіденційність",
      description:
        "Ми дуже цінуємо нашу репутацію. І при будь-яких обставинах дотримуємося політики конфіденційності. У зв’язку з чим, будь-яка інформація про клієнта, отримана нами в процесі надання йому своїх послуг, може бути розкрита лише за його згодою.",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br relative from-lightGray to-gray"
      id="whyUs"
    >
      <div className="mx-auto container">
        <h2 className="md:text-[54px] text-[30px] text-center pb-7">
          Чому клієнти обирають нас?
        </h2>
        {ourAdvanteges.map((item, i) => {
          return (
            <div key={i} className="border-b border-black/70 flex py-14">
              <h3 className="w-[40%] xl:text-[38px] flex items-center text-[16px]">
                {item.title}
              </h3>
              <p className="w-[60%] text-[12px] md:text-[20px] text-black/70 text-justify">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
