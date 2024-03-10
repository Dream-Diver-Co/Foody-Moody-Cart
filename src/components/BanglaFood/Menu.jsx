import React, { useContext, useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import food1 from "../../assets/Food_Image/Food1.jpg";
import food2 from "../../assets/Food_Image/food2.jpg";
import food3 from "../../assets/Food_Image/food3.jpg";
import food4 from "../../assets/Food_Image/food4.jpeg";
import { CartContext } from "../../context/rootContext";

const products = [
  {
    id: 1,
    image: food4,
    title: "Delicious Food 4",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 12,
    image: food3,
    title: "Delicious Food 3",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 21,
    image: food2,
    title: "Delicious Food 2",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 51,
    image: food1,
    title: "Delicious Food 1",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
  },
  {
    id: 34,
    image: food4,
    title: "Delicious Food 4",
    oldPrice: 20,
    newPrice: 18,
    ingredients: "Rice, Chicken, Vegetables",
  },
];

function Menu() {
  const { cart, setCart } = useContext(CartContext);

  // Function to add item to the cart
  const addToCart = (foodItem) => {
    setCart([...cart, foodItem]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {products.map((data) => (
          <FoodCard
            image={data?.image}
            title={data?.title}
            oldPrice={data?.oldPrice}
            newPrice={data?.newPrice}
            ingredients={data?.ingredients}
            addToCart={() => addToCart(data)}
          />
        ))}
      </div>
    </div>
  );
}

function FoodCard({
  image,
  title,
  oldPrice,
  newPrice,
  ingredients,
  addToCart,
}) {
  return (
    <div className={styles.foodCard}>
      <img src={image} alt="Food" className={styles.foodImage} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <div className={`${styles.oldPriceCircle} ${styles.priceCircle}`}>
            <span className={styles.oldPrice}>${oldPrice}</span>
          </div>
          <div className={`${styles.newPriceCircle} ${styles.priceCircle}`}>
            <span className={`${styles.newPrice} ${styles.biggerPrice}`}>
              ${newPrice}
            </span>
          </div>
        </div>
        <div className={styles.ingredients}>
          <span>Main Ingredients: {ingredients}</span>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconContainer} onClick={addToCart}>
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
