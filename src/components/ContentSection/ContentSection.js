import { NavLink } from "react-router-dom";
import css from "./ContentSection.module.css";
const Login = () => {
  return (
    <section>
      <div>
        <NavLink to="/tweets" className={css["content-btn"]}>
          View user cards
        </NavLink>
      </div>
    </section>
  );
};

export default Login;
