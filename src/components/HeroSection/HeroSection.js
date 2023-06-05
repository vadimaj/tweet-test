import css from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={css.overlay}>
      <section className={css.hero}>
        <h1 className={css["hero-title"]}>TweetsApp!</h1>
      </section>
    </div>
  );
};

export default HeroSection;
