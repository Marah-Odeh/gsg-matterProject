import React from "react";
import styles from "./styles.module.css";

const StarRating = ({ count, value, inactiveColor, size, activeColor }) => {
  const stars = Array.from({ length: count }, () => "🟊");

  return (
    <div className={styles.RatingContainer}>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        let StarsStyle = {
          color: style,
          width: size,
          height: size,
          fontSize: size,
        };

        return (
          <span className={styles.Star} key={index} style={StarsStyle}>
            {s}
          </span>
        );
      })}
      <p className={styles.RatingValue}>
        {value} of {count}
      </p>
    </div>
  );
};

export default StarRating;
