import Navbar from '../components/Navbar';
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/globals.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import {SearchProvider} from '../libs/searchContext';

// Global layout that will persist across all pages
export default function MyApp({ Component, pageProps }) {
  return (
    <Container id="main-container">
      {/* Context wrapper to use state across pages */}
      <SearchProvider>
        <Navbar />
        <Component {...pageProps}/>
      </SearchProvider>
    </Container>
  )
}


