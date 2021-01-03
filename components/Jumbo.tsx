import React from "react";
import { Image } from "react-bootstrap";
import styles from '../styles/Jumbo.module.css';

// Jumbo template for all web pages
export default function Jumbo({ image, imageDesc, title, text }) {

  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={image}
        alt={imageDesc}
        fluid
      />
      <h1 className={styles.imageTitle}>{title}</h1>
      <h3 className={styles.imageText}>{text}</h3>
    </div>

  )
}
