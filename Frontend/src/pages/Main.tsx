import scss from "../sass/modules/MainPage.module.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={scss.MainPageClotheStore}>
      <div className={scss.TitleContainer}>
      <h1 className={scss.WelcomeTitle}>¡Hola! Bienvenid@ a mi Tienda</h1>
      </div>
      <p className={scss.welcomeParagraph}>
        busca <span>🔍</span> todo lo desees, hay tanto ropa de{" "}
        <Link to="/women" className={scss.women}>
          Mujer
        </Link>{" "}
        como de
        <Link to="men" className={scss.men}>
          Varón
        </Link>
      </p>
    </div>
  );
};

export default Main;
