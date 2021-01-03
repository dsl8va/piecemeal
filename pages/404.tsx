import React from "react";
import { Container } from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import styles from "../styles/404.module.css";

// Custom 404 page rendering
export default function My404() {
  return (
    <Container className={styles.pageContainer}>
      <Jumbo image={"/images/kitchen13.jpeg"} imageDesc={"404 page picture"} title={"Uh oh! 404 Error"} text={"Looks like this page doesn't exist"}/>
    </Container>
  )
}