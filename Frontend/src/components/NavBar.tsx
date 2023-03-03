import scss from "../sass/modules/Navbar.module.scss";
import HamburguerMenu from "./HamburguerMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className={scss.NavBarHeader}>
      <div>
        <span
          className={scss.HamburguerMenuContainer}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <AiOutlineMenu className={scss.HamburguerMenuIcon} />
        </span>
        <HamburguerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>

      <div>
        <h2 className={scss.TitleHeaderName}>FagaFashion</h2>
      </div>

      <div>
        <img
          src="https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg"
          alt="user"
          className={scss.AvatarUser}
        />
      </div>
    </header>
  );
};

export default NavBar;
