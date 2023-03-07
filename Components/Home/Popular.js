import Image from 'next/image';
import React from 'react';
import p from "../../assets/p-1.jpg" 
import css from "../../styles/popular.module.css"

const Popular= () => {
    return (
        <section className="container" style={{marginTop:"100px"}}>
        <h3 className="title">Most  <span style={{color:"var(--themeRed)"}}> Popular </span> Foods</h3>
        <div className={css.popular}>
        <div >
          <div>
            <div  className={css.images}>
              <Image    layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
        <div >
          <div>
            <div  className={css.images}>
              <Image   layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
        <div >
          <div>
            <div  className={css.images}>
              <Image   layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
        <div >
          <div>
            <div  className={css.images}>
              <Image   layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
        <div >
          <div>
            <div  className={css.images}>
              <Image   layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
        <div >
          <div>
            <div  className={css.images}>
              <Image   layout="intrinsic"  src={p}  alt="..."/>
              <span className={css.price}>$5 - $20</span>
            </div>                
            <div className={css.content}>
              <h4 >Tasty Cakes</h4>
              <p ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <button style={{padding:"10px 20px"}} className="btn">Order Now</button>
            </div>
          </div>
      </div>
</div>
</section>
    );
};

export default Popular;