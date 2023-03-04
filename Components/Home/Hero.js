import Image from "next/image";
import css from "../../styles/hero.module.css";
import cherry from "../../assets/Cherry.png";
const Hero = () => {
  return (
    <section className="container">
      <div className={css.hero_container}>
        {/* left side  */}
        <div className={css.left}>
          <div className={css.cherryDiv}>
            <span>More than Faster</span>
            <Image src={cherry} width={40} height={25} alt="Food" />
          </div>
        </div>

        {/* right side  */}
        <div className={css.rightSide}>1</div>
      </div>
    </section>
  );
};

export default Hero;
