// this is the root file that shows the home page

import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { Container, CardDeck, Jumbotron } from 'react-bootstrap'
import CardTemplate from '../components/Card'
import Jumbo from '../components/Jumbo'
import { SearchContext } from '../libs/searchContext'

export async function getStaticProps() {

  const res = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=32f3365bab9b42479c0594d00489d7ca`);
  const data = await res.json();
  const recipes = data.recipes;

  const title1 = recipes[0].title;
  const title2 = recipes[1].title;
  const title3 = recipes[2].title;
  const id1 = recipes[0].id;
  const id2 = recipes[1].id;
  const id3 = recipes[2].id;
  const image1 = recipes[0].image;
  const image2 = recipes[1].image;
  const image3 = recipes[2].image;
  const ready1 = recipes[0].readyInMinutes;
  const ready2 = recipes[1].readyInMinutes;
  const ready3 = recipes[2].readyInMinutes;

  return {
    props: {
      title1, ready1, id1, image1, title2, ready2, id2, image2, title3, ready3, id3, image3, recipes
    },
    revalidate: 86400,
  }
}

export default function Home({title1, ready1, id1, image1, title2, ready2, id2, image2, title3, ready3, id3, image3, recipes}) {
  // const {handleFeatured, featured} = useContext(SearchContext);
  // handleFeatured(recipes);
  // console.log('home', featured)
  return (
    <Container>
      <Head>
        <title>piecemeal</title>
      </Head>

      <Jumbo title={"Welcome!"} text={"Our mission is to empower you to create delicious meals according to your tastes, diets, or even your food intolerances. Take a look at what we can offer you!"}/>

      <h3>Featured recipes:</h3>
      <CardDeck>
        <CardTemplate id={id1} title={title1} image={image1} ready={ready1} random={true}/>
        <CardTemplate id={id2} title={title2} image={image2} ready={ready2} random={true}/>
        <CardTemplate id={id3} title={title3} image={image3} ready={ready3} random={true}/>
      </CardDeck>

    </Container>
  )
}
