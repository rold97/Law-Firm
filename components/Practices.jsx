"use client";

import { FaRegHandshake } from "react-icons/fa";
import { LiaBusinessTimeSolid, LiaSuitcaseSolid } from "react-icons/lia";
import { IoCarOutline, IoFingerPrint, IoBookOutline } from "react-icons/io5";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";

const Practices = () => {
  const practices = [
    {
      icon: <FaRegHandshake size={90} />,
      title: "Медіація/переговори",
      description:
        "Іноді краще поганий мир, ніж хороша війна. Для того, щоб уникнути багаторічних судових суперечок ЮФ «Воробець та Пилипюк» пропонує свої послуги у переговорах з контрагентами або недоброзичливцями.",
      services: [
        "Підготовка договорів меморандуму у процесі вирішення спору.",
        "Встановлення і роз'яснення правил проведення медіації.",
        "Підготовка і підписання мирових угод.",
      ],
    },

    {
      icon: <LiaBusinessTimeSolid size={90} />,
      title: "Господарське право та процес",
      description:
        " це галузь права, норми якої регулюють відносини, що виникають у процесі організації та здійснення господарської діяльності, пов'язаної із виготовленням та реалізацією продукції, виконанням робіт та наданням послуг для задоволення суспільних потреб та потреб окремих споживачів. Нормативною основою господарського права виступає господарське законодавство.",
      services: [
        "Реєстрація («під ключ») суб’єктів господарської діяльності – фізичних осіб-підприємців (ФОП) та юридичних осіб (ПП, ТзОВ, ПрАТ, ПАТ, тощо...)",
        " Розробка установчих документів для юридичних осіб (рішення засновника, статут, установчий договір, тощо)",
        "Реорганізація суб’єктів господарювання",
        "Участь спеціалістів компанії у переговорах із партнерами та контрагентами клієнта, а також із органами державної влади та місцевого самоврядування",
        "Розробка проектів різного роду господарських договорів та супроводжуючих документів; - Абонентське юридичне обслуговування суб’єктів господарської діяльності",
        "Комплексний правовий супровід іноземних інвестицій",
        "Допомога у придбанні та продажі готового бізнесу, компанії",
        "Тендерний супровід",
        " Детальний правовий аналіз дебіторської заборгованості Клієнта та реалізація заходів, спрямованих на її скорочення",
        "Детальний правовий аналіз кредиторської заборгованості Клієнта перед контрагентами та підготовка стратегії захисту від судових позовів",
        "Досудове врегулювання господарських спорів",
        "Судовий супровід господарських спорів на всіх стадіях процесу і у всіх судових інстанціях",
      ],
    },
    {
      icon: <IoCarOutline size={90} />,
      title: "Адміністративні правопорушення",
      description:
        "Дорожньо-транспортна пригода та – це завжди стресова подія у житті людини. Як наслідок, послаблюється або взагалі втрачається здатність оцінювати обстановку і керувати своїми діями. Це призводить до помилок у правильності дій і правильній їх послідовності, які можуть бути допущені як на місці пригоди (в т.ч. під час оформлення матеріалів ДТП), так і під час звернення до страхової компанії.",
      services: [
        "Захищаємо від шахраїв та підстав на дорозі («автопідстава»)",
        "Оскаржуємо постанови, дії чи бездіяльність поліції",
        "Виконуємо рішення суду на користь потерпілої особи",
        "Допомагаємо в оформленні правильного страхового полісу (автоцивілка, КАСКО)",
        "Звільнюємо автомобілі з-під арешту",
        "Повертаємо автомобіль власнику зі штрафмайданчика",
      ],
    },
    {
      icon: <IoFingerPrint size={90} />,
      title: "Кримінальне право та процеес",
      description:
        "Захист прав та інтересів осіб у кримінальному провадженні один із пріорітетних напрямків діяльності нашої компанії. Адже ми розуміємо наскільки важлива для наших клієнтів свобода та захист від свавілля правоохоронних органів, а також незаконного переслідування. Досвід та практика адвокатів нашої компанії дозволяє максимально ефективно захистити ваші права.",
      services: [
        "Розробка комплексної стратегії захисту у кримінальному провадженні",
        "Представництво інтересів потерпілих, цивільних позивачів, відповідачів",
        "Захист у разі допиту в якості свідка, підозрюваного, обвинуваченого",
        "Підготовка клієнта та співробітників компанії до допитів, обшуків",
        "Підготовка заяви про вчинення злочину для ініціювання кримінального провадження за наявності підстав",
        "Консультування та представництво інтересів у правоохоронних органах: Національної поліції, Прокуратури, Служби безпеки України, Державного бюро розслідувань, Національного антикорупційного бюро",
      ],
    },
    {
      icon: <LiaSuitcaseSolid size={90} />,
      title: "Цивільне право та процес",
      description:
        "Галузь права, яка охоплює норми права, що регулюють майнові та особисті немайнові правові суспільні відносини між рівноправними суб'єктами права — фізичними та юридичними особами, територіальними громадами, державами та іншими суб'єктами публічного права. Предметом цивільного права є майнові та особисті немайнові відносини, так звані «цивільні відносини», засновані на юридичній рівності, вільному волевиявленні, майновій самостійності їх учасників.",
      services: [
        "Юридичний супровід угод",
        "Консультації з питань укладання всіх видів договорів між фізичними особами, інвестиційних договорів, відшкодування шкоди, стягнення заборгованості",
        "Підготовку проектів договорів",
        "Врегулювання спорів про розділ майна, а також спорів, що виникають при невиконанні або неналежному виконанні, зміні та розірванні договорів",
        "Юридичні послуги з врегулювання спорів, що виникають при укладанні договорів і виконання договірних зобов'язань",
        "Сприяння у стягненні всіх видів заборгованості, в тому числі боргу по розписках, договорам позики тощо",
        "Судовий супровід цивільних спорів на всіх стадіях процесу і у всіх судових інстанціях",
      ],
    },
    {
      icon: <MdOutlineFamilyRestroom size={90} />,
      title: "Сімейне право",
      description:
        "Сімейне право – це найбільш витончена галузь права, тому вона потребує ретельного підходу до вирішення ситуацій, які виникають між близькими людьми, оскільки результат того чи іншого юридичного висновку може кардинально змінити життя, а також особисті переваги кожної сторони. Піклуючись про стабільний емоційний стан клієнтів ми обираємо оптимальні та швидкі варіанти вирішення сімейних спорів.",
      services: [
        "Складання шлюбних та інших договорів, які стосуються порядку використання особистого та спільного майна подружжя, виховання та утримання дитини",
        "Юридичний супровід процесу розірвання шлюбу, поділу майна, визначення місця проживання дитини, стягнення аліментів",
        "Представництво інтересів у органах опіки та піклування, державних органах у справах дітей",
        "Позбавлення або обмеження батьківських прав",
        "Супровід у процедурах досудового врегулювання сімейних конфліктів, в тому числі медіація",
      ],
    },
    {
      icon: <IoBookOutline size={90} />,
      title: "Інтелектуальна власність",
      description:
        "В силу популяризації практики ведення легального бізнесу, яка пов'язана з євроінтеграційними процесами в Україні, «Vorobets & Pylypiuk» Law Firm здійснює якісний правовий супровід спорів з порушення авторських прав, прав на бази даних та інших суперечок у сфері інтелектуальної власності.",
      services: [
        "Реєстрація торгових марок",
        "Реєстрація доменних імен",
        "Патентування, ліцензування",
        "Вжиття заходів щодо боротьби з імітацією товарів",
        "Консультації з питань прав інтелектуальної власності",
        "Комерціалізація прав інтелектуальної власності",
        "Захист зареєстрованих і незареєстрованих прав інтелектуальної власності",
      ],
    },
    {
      icon: <RiGovernmentLine size={90} />,
      title: "Взаємодія з органами державної влади",
      description:
        "«Vorobets & Pylypiuk» Law Firm  постійно проводить аналітику системи органів державної влади, законодавчої бази та в разі необхідності, надає допомогу у переговорах з органами державної влади.",
      services: [
        "Аналітика правової бази для прийняття рішень в сфері бізнесу,",
        "Допомога у переговорах з органами державної влади",
        "Юридична допомога у врегулюванні кризових ситуацій",
        "Юридичний захист у разі силових захоплень бізнесу",
        "Проведення юридичного аналізу перспективи нового бізнесу",
      ],
    },
  ];

  return (
    <section className="bg-darkGreen py-32" id="practices">
      <div className="container mx-auto">
        <h2 className="text-[48px] flex justify-center xl:hidden">
          Наші послуги
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4 items-center justify-around">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className=" grid xl:grid-cols-4 md:grid-cols-3 gap-[20px] gap-y-[50px] pt-[30px] justify-center items-center cursor-pointer col-span-3 ml-6"
          >
            {practices.map((practice, i) => {
              return (
                <Link
                  href={{
                    pathname: "/practice",
                    query: {
                      title: practice.title,
                      description: practice.description,
                      services: practice.services,
                    },
                  }}
                  key={i}
                  className="flex flex-col justify-center items-center w-[200px] h-[250px] text-center bg-transparent rounded-md hover:no-underline hover:bg-white/20 hover:border border-black pt-5 transition-all duration-300 px-[2.5px] text-black hover:text-black"
                >
                  {practice.icon}
                  <div className="py-6 text-lg font-medium">
                    {practice.title}
                  </div>
                </Link>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="hidden bg-gray w-48 h-52 rounded-md xl:flex flex-col justify-around itmes-center shadow-xl ml-4"
          >
            <p className="flex text-xl font-semibold items-center justify-center pt-4">
              Наші послуги
            </p>
            <div
              className="flex items-center
                justify-center"
            >
              <IoIosArrowRoundBack size={50} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Practices;
