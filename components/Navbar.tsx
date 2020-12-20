import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Form, Nav, Navbar, NavDropdown,
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
        <Image src="/logo.png" alt="Piecemeal Logo" width={50} height={50} />
        <span id="navbar-title">
          piecemeal
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="recipes/random">Random Recipe</Nav.Link>
          <NavDropdown title="Search By" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ingredients</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Cuisine</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Custom Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl id="query" type="text" placeholder="Find a recipe..." className="mr-sm-1" />
          <Button onClick={handleClick} variant="secondary">Explore</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  // <Container>
  //   <Row className="row mb-3 mt-3">
  //     <Col><h1>piecemeal</h1></Col>
  //     <Col className="mt-2">
  //       <InputGroup>
  //         <FormControl
  //           placeholder="Find a recipe"
  //           aria-label="Find a recipe"
  //           aria-describedby="basic-addon2"
  //           id="query"
  //         />
  //         <InputGroup.Append>
  //           <Button onClick={handleClick}variant="secondary">Explore</Button>
  //         </InputGroup.Append>
  //       </InputGroup>
  //     </Col>
  //   </Row>
  // </Container>

  );
}
