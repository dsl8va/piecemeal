import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useState, useContext, useEffect} from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { cuisine, diet, intolerance, nutrient, vitamin, } from '../libs/SearchParams';
import Dropdown from '../components/Dropdown';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import queryMaker from '../libs/APIQueryMaker';

export default function About() {
  const [isLoading, setLoading] = useState(false);
  const {handleRecipes, recipes, handleQuery} = useContext(SearchContext);

  useEffect(() => {
      if (isLoading) {
        setLoading(false);
      }
    }, [isLoading]);

  const router = useRouter();

  const searchRecipe = async e => {
    e.preventDefault();
    setLoading(true);

    const inputs = document.getElementById("custom").elements;

    const queryString = await queryMaker(inputs);

    // await handleQuery(`https://api.spoonacular.com/recipes/complexSearch${queryString}&number=100&apiKey=32f3365bab9b42479c0594d00489d7ca`)

    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch${queryString}&number=100&addRecipeNutrition=true&apiKey=32f3365bab9b42479c0594d00489d7ca`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        handleRecipes(data.results);
      })

    await router.push('/results');
  }

  return (
    <Container>
      <Head>
        <title>Custom Search</title>
      </Head>

      <Jumbo title={"Custom Search"} text={"Create your own custom search with as little or as many parameters as you want! We have recipes for every cook."}/>

      {recipes.length > 0 &&
      <Row as={Link} href='/results'>Back to search results</Row>}

      <Form id="custom" className="mt-3 mb-3" onSubmit={searchRecipe}>

         <Form.Row>
          <Form.Label column sm={2}>
            Keywords
          </Form.Label>
          <Col sm={3}>
            <Form.Control id="query" type="text" placeholder="Search keywords here..." />
          </Col>
        </Form.Row>

        <Dropdown title={"Cuisine"} options={cuisine} minmax={false}/>
        <Dropdown title={"Diet"} options={diet} minmax={false}/>
        <Dropdown title={"Intolerances"} options={intolerance} minmax={false}/>
        <Dropdown title={"Nutrient"} options={nutrient} minmax={true}/>
        <Dropdown title={"Vitamin"} options={vitamin} minmax={true}/>
        <Button onClick={!isLoading ? searchRecipe : null} className="mb-3" variant="secondary" type="submit">
          {isLoading ? 'Loading…' : 'Search'}
        </Button>
      </Form>

    </Container>
  )
}
