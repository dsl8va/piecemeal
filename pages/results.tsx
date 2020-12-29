import React, {useContext, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import {SearchContext} from './searchContext';

// export async function getServerSideProps() {

//   const res = await fetch()
//   return {

//   }
// }


const Results = () => {
  const {recipes} = useContext(SearchContext);

  console.log('recipes state', recipes)

  return (
    <Container>
      <div>Results</div>

    </Container>
  )
}

export default Results;