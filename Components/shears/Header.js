import Image from "next/image";
import css from "../../styles/header.module.css";
import logo from "../../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={`container ${css.header}`}>
      <div className={css.logo}>
        <Image src={logo} width={50} height={50} alt="logo" />
        <span>Fudo</span>
      </div>
      <ul className={`${css.menu}  ${open && css.open}`}>
        <li>Home </li>
        <li>Menu </li>
        <li>Contact </li>
      </ul>
      <div className={css.rightSide}>
        <div onClick={() => setOpen(!open)}>
          <i className="fa-sharp fa-solid fa-bars"></i>
        </div>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
