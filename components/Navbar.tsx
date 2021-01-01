import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  Form, Nav, Navbar, NavDropdown, Row,
} from 'react-bootstrap';
import { SearchContext } from '../libs/searchContext';

export default function NavBar() {
  const router = useRouter();
  const {handleRecipes} = useContext(SearchContext);

  const handleClick = async () => {
    const search = (document.getElementById('query') as HTMLTextAreaElement).value;
    console.log('search:', search);
    const res = await fetch (`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=32f3365bab9b42479c0594d00489d7ca`)
    const data = await res.json();
    const recipes = data.results;
    console.log('recipes', recipes)
    await handleRecipes(recipes);
    router.push('/results');
  };

  return (

    <Navbar bg="primary" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <Row>
          <Image className="pt-1 pb-1"src="/logo.png" alt="Piecemeal Logo" width={50} height={50} />
          <h1 id="navbar-title">
            piecemeal
          </h1>
        </Row>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <ul className="navbar-nav mr-auto ml-3">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/custom">Custom Search</a>
          </li>
        </ul>

        <Form inline>
          <FormControl id="query" type="text" placeholder="Find a recipe..." className="mr-sm-1" />
          <Button onClick={handleClick} variant="secondary">Explore</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );
}
