import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  Form, Nav, Navbar, NavDropdown, Row,
} from 'react-bootstrap';

export default function NavBar() {
  // const [search, setSearch] = useState('');
  const router = useRouter();

  const handleClick = () => {
    const search = (document.getElementById('query') as HTMLTextAreaElement).value;
    console.log('search:', search);
    router.push('/explore');
  };

  return (

    <Navbar bg="white" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <Row>
          <Image src="/logo.png" alt="Piecemeal Logo" width={50} height={50} />
          <h1 id="navbar-title">
            piecemeal
          </h1>
        </Row>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-3 mr-auto">
          <Nav.Link className="mr-3" as={Link} href="/">Home</Nav.Link>
          <Nav.Link className="mr-3" as={Link} href="/about">About</Nav.Link>
          <NavDropdown title="Search By" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cuisine</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Diet</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Ingredients</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Custom Search</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl id="query" type="text" placeholder="Find a recipe..." className="mr-sm-1" />
          <Button onClick={handleClick} variant="secondary">Explore</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );
}
