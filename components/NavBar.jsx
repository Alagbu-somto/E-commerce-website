import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/stateContext";
const NavBar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <b>E-Store</b>
        </Link>
      </p>
      <div>
        <span className="nav-home">
          <Link href="/">Home</Link>
        </span>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantity}</span>
        </button>
        {showCart ? <Cart /> : null}
      </div>
    </div>
  );
};
export default NavBar;
