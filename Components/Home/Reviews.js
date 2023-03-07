import Image from 'next/image';
import React from 'react';
import css from "../../styles/reviews.module.css"
import pic from "../../assets/pic1.png"

const Reviews = () => {
    return (
        <section className="container" style={{marginTop:"100px"}}>
        <h3 className="title">Our Customers   <span style={{color:"var(--themeRed)"}}> Reviews </span></h3>

        <section className={css.container}>
        
            <article className={css.review}>
                <div className={css.imgContainer}>
                    <Image layout="intrinsic"  src={pic}  alt="" /> 
                </div>
               
                <h4 className={css.author}>Sara Jones</h4>
                <p className={css.job}>UX DESIGNER</p>
                <p className={css.info}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?
                </p>
                <div className={css.quote}><i className="fa-solid fa-quote-right" id="quote"></i></div>
            </article>
        </section>
     
</section>
    );
};

export default Reviews;