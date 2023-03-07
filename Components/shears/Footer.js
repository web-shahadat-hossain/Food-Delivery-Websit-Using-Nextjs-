import React from "react";
import css from "../../styles/footer.module.css"
import logo from "../../assets/Logo.png"
import Image from "next/image";

const Footer = () => {
  return <footer className={css.footer}>
<div className="container">
<div className={css.footerContainer}>
  <div className={css.useLink}>
    <h2>USEFUL LINKS</h2>
    <div>
  
        <div>
          <p>Blog</p>
          <p>FAQs</p>
          <p>About </p>
          <p>Contact Us </p>
        </div>
        <div>
          <p>Wishlist</p>
          <p>Privacy Policy</p>
          <p>Order Tracking
 </p>
          <p>Warranty and Services
 </p>
        </div>
 
    </div>
  </div>
  <div className={css.address}>
    <h2 className={css.logo}>
      <Image width={50} height={50} src={logo} alt=""/>
    </h2>
    <div className={css.address}>
  
<p>Shahinur Vila, Elevator Lock 9, Nurpur Road No. 1, Dania, Kadamtali, Dhaka</p>
<h6> <span>Hotline:</span> 
+8809611745310 </h6>
<h6> <span>Email: </span> 

info@globalitmaster.com </h6>
 
    </div>
  </div>
  <div className={css.openHours}>
    <h2>OPENING HOUR</h2>
    <div>
  
    <h6> <span>Friday::</span> 
    09:00 – 23:00h</h6>
    <h6> <span>Friday::</span> 
    09:00 – 23:00h</h6>
    <h6> <span>Friday::</span> 
    09:00 – 23:00h</h6>

 
    </div>
  </div>
</div>
</div>
  </footer>
};

export default Footer;
