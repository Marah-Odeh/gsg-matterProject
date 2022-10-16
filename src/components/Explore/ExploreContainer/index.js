import React from "react";
import styles from "./styles.module.css";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";
import SeeButton from "../SeeButton";

const ExploreContainer = () => {
  return (
    <div className={styles.BoxContainer}>
      <LeftCol />
      <RightCol />
    </div>
  );
};

export default ExploreContainer;
