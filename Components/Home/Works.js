import Image from "next/image"
import { Fragment } from "react"
import step1 from "../../assets/step-1.jpg"
import step2 from "../../assets/step-2.jpg"
import step3 from "../../assets/step-3.jpg"
import step4 from "../../assets/step-4.jpg"
import css from "../../styles/work.module.css"
const Works = () => {

  const data=[

    {
      img:step1,
      id:1,
      title:"Choose Your Favorite Food"
    },
    {
      img:step2,
      id:2,
      title:"Free And Fast Delivery"
    },
    {
      img:step3,
      id:3,
      title:"Easy Payments Methods"
    },
    {
      img:step4,
      id:4,
      title:"Easy Payments Methods"
    }
  ]

  return (
   <section className={`container ${css.container}`}>
<h3 className="title">How It <span style={{color:"var(--themeRed)"}}>Works</span> </h3>
<div className={css.workContainer}>
{
 data.map((work, index)=><div key={index}>
 <div > 
  <div className={css.workImg}>  <Image   layout="intrinsic" src={work.img} alt="" /></div>

  <h4>{work.title}</h4>
 </div>
 </div>)
}
</div>

   </section>
  );
};

export default Works;
