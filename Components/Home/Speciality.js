import Image from "next/image";
import css from "../../styles/Speciality.module.css" 
import s1 from  "../../assets/s-1.png"
import sImg1 from  "../../assets/s-img-1.jpg"


const Speciality = () => {
    return (
        <section className="container" style={{marginTop:"50px"}}>
            <h3 className="title">Our <span style={{color:"var(--themeRed)"}}>Speciality</span> </h3>
            <div>
            <div className={css.specialityContainer}>

            <div >
                <div className={css.ourSpeciality}>
              <div className={css.specialityImg }>
              <Image height={650}  layout="intrinsic"  src={sImg1}  alt="" />
              </div>
                <div className={css.content}>
                    <Image   src={s1} alt=""/>
                    <h3 >tasty burger</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
                </div>
            </div>
            <div >
                <div className={css.ourSpeciality}>
              <div className={css.specialityImg }>
              <Image height={650}  src={sImg1}  alt="" />
              </div>
                <div className={css.content}>
                    <Image src={s1} alt=""/>
                    <h3 >tasty burger</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
                </div>
            </div>
            <div >
                <div className={css.ourSpeciality}>
              <div className={css.specialityImg }>
              <Image height={650}  src={sImg1}  alt="" />
              </div>
                <div className={css.content}>
                    <Image src={s1} alt=""/>
                    <h3 >tasty burger</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
                </div>
            </div>


        </div>
    </div>
    </section>
      
    );
};

export default Speciality;