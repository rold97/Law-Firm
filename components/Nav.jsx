import { Link } from "react-scroll";

const links = [
  {
    path: "home",
    name: "home",
    offset: -50,
  },
  {
    path: "aboutUs",
    name: "about us",
    offset: -50,
  },
  {
    path: "about",
    name: "about",
    offset: -150,
  },
  {
    path: "location",
    name: "location",
    offset: 0,
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
