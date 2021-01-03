import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useState, useContext } from 'react';
import { Button, Col, Container, Form, Spinner } from 'react-bootstrap';
import { cuisine, diet, intolerance, nutrient, vitamin, } from '../libs/SearchParams';
import Dropdown from '../components/Dropdown';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import queryMaker from '../libs/APIQueryMaker';
import styles from '../styles/Custom.module.css';

// Custom Search page
export default function CustomSearch() {
  const [loading, setLoading] = useState(false);
  const {handleRecipes, recipes} = useContext(SearchContext);

  const router = useRouter();

  const searchRecipe = async e => {
    e.preventDefault();
    await setLoading(!loading);
    const inputs = document.getElementById("custom").elements;
    console.log('inputs', inputs);
    const queryString = await queryMaker(inputs);

    console.log('querystring', queryString)

    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch${queryString}&number=100&addRecipeNutrition=true&apiKey=32f3365bab9b42479c0594d00489d7ca`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        handleRecipes(data.results);
      })
    await setLoading(!loading);
    await router.push('/results');
  }

  return (
    <Container className={styles.pageContainer}>
      <Head>
        <title>Custom Search</title>
      </Head>

      <Jumbo image={"/images/kitchen9.jpeg"} imageDesc={"Custom search page picture"} title={"Create your own custom search"} text={"with as few or as many parameters as you like"}/>

      {recipes.length > 0 &&
      <Link href="/results" passHref>
        <Button className={styles.button} variant="outline-secondary">Back to search results</Button>
      </Link>}

      <Form id="custom" className={styles.customForm} onSubmit={searchRecipe}>

         <Form.Row>
          <Form.Label column sm={2}>
            Keywords
          </Form.Label>
          <Col sm={3} className={styles.keyword}>
            <Form.Control id="query" type="text" placeholder="Search keywords here..." />
          </Col>
        </Form.Row>

          <Dropdown title={"Cuisine"} options={cuisine} minmax={false}/>
          <Dropdown title={"Diet"} options={diet} minmax={false}/>
          <Dropdown title={"Intolerances"} options={intolerance} minmax={false}/>
          <Dropdown title={"Nutrient"} options={nutrient} minmax={true}/>
          <Dropdown title={"Vitamin"} options={vitamin} minmax={true}/>

        <Button onClick={searchRecipe} className={styles.search} variant="secondary" type="submit">
          {!loading ? "Search" :
            <Spinner
            as="span"
            variant="white"
            animation="border"
            size="sm"
            role="status"
          />
          }
          <span className="sr-only">Loading...</span>
        </Button>
      </Form>

    </Container>
  )
}
