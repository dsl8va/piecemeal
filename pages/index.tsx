// this is the root file that shows the home page

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, CardDeck, Jumbotron } from 'react-bootstrap'
import CardTemplate from '../components/Card'

export async function getStaticProps(context) {
  const res = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=06fd4d74136f48c083cef13657f3a34a`);
  const data = await res.json();
  const recipes = data.recipes;

  const title1 = recipes[0].title;
  const summary1 = recipes[0].summary;
  const image1 = recipes[0].image;
  const title2 = recipes[1].title;
  const summary2 = recipes[1].summary;
  const image2 = recipes[1].image;
  const title3 = recipes[2].title;
  const summary3 = recipes[2].summary;
  const image3 = recipes[2].image;

  return {
    props: {
      title1, summary1, image1, title2, summary2, image2, title3, summary3, image3
    },
    revalidate: 86400,
  }
}


export default function Home({title1, summary1, image1, title2, summary2, image2, title3, summary3, image3}) {
  return (
    <Container>
      <Head>
        <title>piecemeal</title>
      </Head>

      <Jumbotron fluid>
        <Container>
          <h1>Welcome!</h1>
          <p>
            Our mission is to empower you to create delicious meals according to your tastes, diets, or even your food intolerances. Take a look at what we can offer you!
          </p>
        </Container>
      </Jumbotron>
      <h3>Featured recipes:</h3>
      <CardDeck>
        <CardTemplate title={title1} description={summary1} image={image1}/>
        <CardTemplate title={title2} description={summary2} image={image2}/>
        <CardTemplate title={title3} description={summary3} image={image3}/>

      </CardDeck>

    </Container>
  )
}
