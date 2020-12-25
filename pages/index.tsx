// this is the root file that shows the home page

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container, CardDeck, Jumbotron } from 'react-bootstrap'
import CardTemplate from '../components/Card'
import Jumbo from '../components/Jumbo'

// export async function getStaticProps(context) {
//   const res = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=32f3365bab9b42479c0594d00489d7ca`);
//   const data = await res.json();
//   const recipes = data.recipes;

//   const title1 = recipes[0].title;
//   const title2 = recipes[1].title;
//   const title3 = recipes[2].title;
//   const ready1 = recipes[0].readyInMinutes;
//   const ready2 = recipes[1].readyInMinutes;
//   const ready3 = recipes[2].readyInMinutes;
//   const diet1 = recipes[0].diets; // arrays
//   const diet2 = recipes[1].diets;
//   const diet3 = recipes[2].diets;
//   const image1 = recipes[0].image;
//   const image2 = recipes[1].image;
//   const image3 = recipes[2].image;

//   return {
//     props: {
//       title1, ready1, diet1, image1, title2, ready2, diet2, image2, title3, ready3, diet3, image3
//     },
//     revalidate: 86400,
//   }
// }


export default function Home({title1, ready1, diet1, image1, title2, ready2, diet2, image2, title3, ready3, diet3, image3}) {
  return (
    <Container>
      <Head>
        <title>piecemeal</title>
      </Head>

      <Jumbo title={"Welcome!"} text={"Our mission is to empower you to create delicious meals according to your tastes, diets, or even your food intolerances. Take a look at what we can offer you!"}/>

      <h3>Featured recipes:</h3>
      <CardDeck>
        <CardTemplate title={title1} ready={ready1} diet={diet1} image={image1}/>
        <CardTemplate title={title2} ready={ready2} diet={diet2} image={image2}/>
        <CardTemplate title={title3} ready={ready3} diet={diet3} image={image3}/>

      </CardDeck>

    </Container>
  )
}
