import { Link } from "react-scroll";

const links = [
  {
    path: "home",
    name: "Головна",
    offset: -50,
  },
  {
    path: "aboutUs",
    name: "Про нас",
    offset: -50,
  },
  {
    path: "practices",
    name: "Практики",
    offset: -150,
  },

  {
    path: "whyUs",
    name: "Чому ми",
    offset: 0,
  },
  {
    path: "contacts",
    name: "Контакти",
    offset:  0,
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={linkStyles}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
