import styles from "./styles.module.css";
import ImageCard from "../../Shared/ImageCard";
import NewProduct from "./NewProduct";
import React from "react";
const ProductBox = ({ products }) => {
  return (
    <div className={styles.ProductsBox}>
      {products.map((item, index) => {
        const { title, price, NewBox } = item;

        return (
          <div key={index} className={styles.ProductItems}>
            <>
              {NewBox ? <NewProduct /> : <></>}

              <ImageCard {...item} ImageIndex={index} ButtonText="Quick View" />
              <p id={styles.Description}>{title}</p>
              <p id={styles.Price}>${price}</p>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default ProductBox;
