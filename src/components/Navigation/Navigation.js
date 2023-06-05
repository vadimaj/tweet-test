import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css["navigation-container"]}>
      <div className={css.logo}>
        <NavLink to="/" className={css.logo}>
          TweetsApp!
        </NavLink>
      </div>

      <NavLink to="/tweets" className={css.navlink}>
        View user card
      </NavLink>
    </nav>
  );
};
export default Navigation;
