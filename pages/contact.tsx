import Head from 'next/head';
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  let source = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJb_9npgVMtokR0IyeuuY4WaY&key=${process.env.GOOGLE_MAPS}`

  return (
     <Container className={styles.pageContainer}>
      <Head>
        <title>Contact</title>
      </Head>

      <Jumbo image={"/images/kitchen15.jpg"} imageDesc={"Contact page picture"} title={"Questions, comments, or concerns?"} text={"feel free to reach out and we'll get back to you shortly!"}/>
    <Row className="justify-content-md-center">
      <Col xs lg="5" className={styles.map}>
        <div>
          <h2 className={styles.title}>Visit us!</h2><br/>
          <span>
              <iframe className={styles.center} width="500" height="400" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={source}
              ></iframe>
          </span>
          <div className={styles.address}>
            <strong>Piecemeal HQ</strong><br/>
            9619 Fairfax Blvd<br/>
            Fairfax, VA 22031<br/>
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </div>
        </div>

      </Col>

      <Col xs lg="4">
        <h2 className={styles.title}>Message us!</h2><br/>
        <Form className="mr-3">
          <Form.Group controlId="formName">
            <Form.Label style={{color: "#505050"}}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label style={{color: "#505050"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label style={{color: "#505050"}}>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button className={styles.center} variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>

    </Row>

    </Container>
  )
}