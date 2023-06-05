import css from "./Loader.module.css";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        height="30"
        width="30"
        color="#0ea155"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fe398"
        strokeWidth={7}
        strokeWidthSecondary={7}
      />
    </div>
  );
};

export default Loader;
