import Link from "next/link";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Container className={styles.container} fluid>
      <span className="mx-auto">
        <Link href="/">
          <a className={styles.white}>piecemeal</a>
        </Link>
      </span>

      <p className="mx-auto">
        Fake Copyright &copy; 2020 Piecemeal LLC
      </p>
      <p className="mx-auto">By Daniel Lee</p>
    </Container>
  )
}