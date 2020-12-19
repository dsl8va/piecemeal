// this is the global layout that will persist across all pages
// for instance if you want a nav bar / footer everywhere, you can have it here
// this page is executed both on the server and client side

import Navbar from '../components/Navbar'
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/globals.css'
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  )

}

export default MyApp