import { Link } from "react-router-dom";
import scss from "../sass/modules/HamburguerMenu.module.scss";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsHandIndexThumb } from "react-icons/bs";
import { useRef } from "react";

interface HambuguerMenuProps {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburguerMenu = ({ toggleMenu, setToggleMenu }: HambuguerMenuProps) => {
  const navMenuRef = useRef(null);

  return (
    <div className={`${scss.MenuHamburguerToogleContainer}`}>
      <nav
        ref={navMenuRef}
        className={`${toggleMenu && scss.open} ${scss.HamburguerMenu}`}
      >
        <ul className={scss.MenuListHamburguer}>
          <li>
            <span>
              <BsHandIndexThumb className={scss.main} />
            </span>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <span>
              <AiOutlineWoman className={scss.women} />
            </span>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <span>
              <AiOutlineMan className={scss.men} />
            </span>
            <Link to="/men">Men</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
