import React, { useContext, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import Megamenu from "../Megamenu/Megamenu";
import SubscriptionMegamenu from "../SubscriptionMegamenu/SubscriptionMegamenu";
import { Dropdown } from "react-bootstrap";
import { CartContext } from "../../context/rootContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSubscriptionMegamenu, setShowSubscriptionMegamenu] =
    useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSearchField, setShowSearchField] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Store cart items here

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foodymoody} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <Link to="/About">About Us</Link>
        </li>
        <li
          className="p__opensans"
          onMouseEnter={() => setToggleMenu(true)}
          onMouseLeave={() => setToggleMenu(false)}
        >
          <Link to="/menu">Menu</Link>
          {toggleMenu && <Megamenu />}
        </li>
        <li className="p__opensans">
          <Link to="/Feature">Featured-Bonus</Link>
        </li>
        <li
          className="p__opensans"
          onMouseEnter={() => setShowSubscriptionMegamenu(true)}
          onMouseLeave={() => setShowSubscriptionMegamenu(false)}
        >
          <Link to="/Subscription">Subscription</Link>
          {showSubscriptionMegamenu && <SubscriptionMegamenu />}
        </li>
        <li className="p__opensans">
          <Link to="/shef">Chef-At-Home</Link>
        </li>
      </ul>

      <div className="app__navbar-icons">
        <div className="icon" onClick={() => setShowCartModal(!showCartModal)}>
          <div className="cart-icon">
            <Link to="/cart">
            <FaShoppingCart color="white" fontSize={"25px"} />
          </Link>

          </div>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" className="cart-toggle" />
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 0 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>

          {showCartModal && (
            <div className="cart-modal">
              <ul>{}</ul>
            </div>
          )}
        </div>

        <div className="icon" onClick={() => setShowCartModal(!showCartModal)}>
          <div className="cart-icon">
            {cart && Array.isArray(cart) && cart.length > 0 ? cart.length : 0}
          </div>

          {showCartModal && (
            <div className="cart-modal">
              <ul>{/* Cart items list */}</ul>
            </div>
          )}
        </div>
        <div
          className="icon"
          onClick={() => setShowSearchField(!showSearchField)}
        >
          <FaSearch />
          {showSearchField && (
            <input
              type="text"
              className="search-field"
              placeholder="Search..."
            />
          )}
        </div>
        <div className="icon">
          <Link to="/login">
            <FaUser />
          </Link>
        </div>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="/">Home</a>
              </li>
              <li className="p__opensans">
                <Link to="/About">About Us</Link>
              </li>
              <li className="p__opensans">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Feature">Featured-Bonus</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Subscription">Subscription</Link>
              </li>
              <li className="p__opensans">
                <Link to="/shef">Chef-At-Home</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
