import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useState, useContext} from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { cuisine, diet, intolerance, nutrient, vitamin, } from '../libs/SearchParams';
import Dropdown from '../components/Dropdown';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './searchContext';
import queryMaker from '../libs/APIQueryMaker';

export default function About() {

  const {handleRecipes} = useContext(SearchContext);

  const router = useRouter();

  const searchRecipe = async e => {
    e.preventDefault();

    const inputs = document.getElementById("custom").elements;
    console.log('html', inputs);

    const queryString = await queryMaker(inputs);
    console.log('querystring', queryString)

    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch${queryString}&number=100&apiKey=32f3365bab9b42479c0594d00489d7ca`)
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
        <Button onClick={searchRecipe} className="mb-3" variant="secondary" type="submit">
          Search
        </Button>
      </Form>

    </Container>
  )
}
