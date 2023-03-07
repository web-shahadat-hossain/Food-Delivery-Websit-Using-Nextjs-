import Image from "next/image";
import css from "../../styles/hero.module.css";
import cherry from "../../assets/Cherry.png";
import heroImage from "../../assets/HeroImage.png"
import { UilPhone  } from "@iconscout/react-unicons";
import pizza from "../../assets/p1.jpg"
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
          <div className={css.heroText}>
              <span>Be than Faster</span>
              <span>In Delivering</span>
              <span>Your <span style={{color:"var(--themeRed)"}}>Pizza</span> </span>
          </div>
        
        <span className={css.miniDescription}>Our mission is to fill your tummy with delicious food with fast and free delivery</span>
          <button className={`btn ${css.btn}`}>
            Get Started
          </button>
        </div>
       

        {/* right side  */}
        <div className={css.rightSide}>
          <div className={css.imagesContainer}>
            <Image src={heroImage }   layout="intrinsic" alt="" />
          </div>
          <div className={css.contactUs}>
            <span>Contact Us </span>
            <div>
            <UilPhone color="white" />
            </div>
          </div>
          
          <div className={css.pizza}>
<div>
  <Image src={pizza}  layout="intrinsic" alt=""/>
</div>
<div className={css.details}>
<span>Italian Pizza</span>
<span><span style={{color:"var(--themeRed)"}}>$</span> 7.49</span>
<span></span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
