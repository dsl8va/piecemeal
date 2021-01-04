import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  Form, Nav, Navbar, Row,
} from 'react-bootstrap';
import { SearchContext } from '../libs/searchContext';
import styles from '../styles/Navbar.module.css';

// Navbar component for every webpage
export default function NavBar() {
  const router = useRouter();
  const {handleRecipes} = useContext(SearchContext);

  const handleClick = async () => {
    const search = (document.getElementById('query') as HTMLTextAreaElement).value;
    console.log('search:', search);
    const res = await fetch (`https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeNutrition=true&apiKey=32f3365bab9b42479c0594d00489d7ca`)
    const data = await res.json();
    const recipes = data.results;
    console.log('recipes', recipes)
    await handleRecipes(recipes);
    router.push('/results');
  };

  return (

    <Navbar bg="primary" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <Row className="ml-3">
          <Image className="pt-1 pb-1"src="/logo.png" alt="Piecemeal Logo" width={50} height={50} />
          <h1 id="navbar-title" className={styles.white}>
            piecemeal
          </h1>
        </Row>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

         <Nav className={styles.navbarLinks}>
           <Link href="/" passHref>
             <Nav.Link >Home</Nav.Link>
           </Link>
           <Link href="/about" passHref>
             <Nav.Link>About</Nav.Link>
           </Link>
           <Link href="/custom" passHref>
             <Nav.Link>Custom Search</Nav.Link>
           </Link>
           <Link href="/contact" passHref>
             <Nav.Link>Contact</Nav.Link>
           </Link>

        </Nav>

        <Form className="mr-3" inline>
          <FormControl id="query" type="text" placeholder="Find a recipe..." className="mr-sm-1" />
          <Button onClick={handleClick} variant="secondary">Explore</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );
}
