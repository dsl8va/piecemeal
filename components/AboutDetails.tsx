import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import CollapseDiet from './CollapseDetailDiet'

const Cuisines =
<Container>
  <Row className="mb-3">Currently we support 26 different international cuisines:</Row>
  <Row>
    <ListGroup variant='flush'>
      <ListGroup.Item>African</ListGroup.Item>
      <ListGroup.Item>American</ListGroup.Item>
      <ListGroup.Item>British</ListGroup.Item>
      <ListGroup.Item>Cajun</ListGroup.Item>
      <ListGroup.Item>Caribbean</ListGroup.Item>
      <ListGroup.Item>Chinese</ListGroup.Item>
      <ListGroup.Item>Eastern European</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>European</ListGroup.Item>
      <ListGroup.Item>French</ListGroup.Item>
      <ListGroup.Item>German</ListGroup.Item>
      <ListGroup.Item>Greek</ListGroup.Item>
      <ListGroup.Item>Indian</ListGroup.Item>
      <ListGroup.Item>Irish</ListGroup.Item>
      <ListGroup.Item>Italian</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>Japanese</ListGroup.Item>
      <ListGroup.Item>Jewish</ListGroup.Item>
      <ListGroup.Item>Korean</ListGroup.Item>
      <ListGroup.Item>Latin American</ListGroup.Item>
      <ListGroup.Item>Mediterranean</ListGroup.Item>
      <ListGroup.Item>Mexican</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>Middle Eastern</ListGroup.Item>
      <ListGroup.Item>Nordic</ListGroup.Item>
      <ListGroup.Item>Southern</ListGroup.Item>
      <ListGroup.Item>Spanish</ListGroup.Item>
      <ListGroup.Item>Thai</ListGroup.Item>
      <ListGroup.Item>Vietnamese</ListGroup.Item>

    </ListGroup>
  </Row>
</Container>
;

const Intolerances =
    <Container>
      <Row className="mb-3">Narrow your search down by the supported list of diet intolerances below:</Row>
      <Row>
        <ListGroup variant='flush'>
          <ListGroup.Item>Dairy</ListGroup.Item>
          <ListGroup.Item>Egg</ListGroup.Item>
          <ListGroup.Item>Gluten</ListGroup.Item>
        </ListGroup>
        <ListGroup variant='flush'>
          <ListGroup.Item>Grain</ListGroup.Item>
          <ListGroup.Item>Peanut</ListGroup.Item>
          <ListGroup.Item>Seafood</ListGroup.Item>
        </ListGroup>
        <ListGroup variant='flush'>
          <ListGroup.Item>Sesame</ListGroup.Item>
          <ListGroup.Item>Shellfish</ListGroup.Item>
          <ListGroup.Item>Soy</ListGroup.Item>
        </ListGroup>
        <ListGroup variant='flush'>
          <ListGroup.Item>Sulfite</ListGroup.Item>
          <ListGroup.Item>Tree Nut</ListGroup.Item>
          <ListGroup.Item>Wheat</ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
;

const CustomSearch =
<Container>
    <Row className="mb-3">Our calling card. You can create a custom search by identifying a max or min amount of the following macro and micro nutrients:</Row>
    <Row>
    <ListGroup variant='flush'>
      <ListGroup.Item>Calories (in kcal)</ListGroup.Item>
      <ListGroup.Item>Fat (in g)</ListGroup.Item>
      <ListGroup.Item>Trans Fat (in g)</ListGroup.Item>
      <ListGroup.Item>Saturated Fat (in g)</ListGroup.Item>
      <ListGroup.Item>Mono Unsaturated Fat (in g)</ListGroup.Item>
      <ListGroup.Item>Poly Unsaturated Fat (in g)</ListGroup.Item>
      <ListGroup.Item>Protein (in g)</ListGroup.Item>
      <ListGroup.Item>Cholesterol (in mg)</ListGroup.Item>
      <ListGroup.Item>Carbohydrates (in g)</ListGroup.Item>
      <ListGroup.Item>Net Carbohydrates (in g)</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>Alcohol (in g)</ListGroup.Item>
      <ListGroup.Item>Fiber (in g)</ListGroup.Item>
      <ListGroup.Item>Sugar (in g)</ListGroup.Item>
      <ListGroup.Item>Sodium (in mg)</ListGroup.Item>
      <ListGroup.Item>Caffeine (in mg)</ListGroup.Item>
      <ListGroup.Item>Manganese (in mg)</ListGroup.Item>
      <ListGroup.Item>Potassium (in mg)</ListGroup.Item>
      <ListGroup.Item>Magnesium (in mg)</ListGroup.Item>
      <ListGroup.Item>Calcium (in mg)</ListGroup.Item>
      <ListGroup.Item>Copper (in mg)</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>Zinc (in mg)</ListGroup.Item>
      <ListGroup.Item>Phosphorus (in mg)</ListGroup.Item>
      <ListGroup.Item>Fluoride (in mg)</ListGroup.Item>
      <ListGroup.Item>Choline (in mg)</ListGroup.Item>
      <ListGroup.Item>Iron (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin A (in IU)</ListGroup.Item>
      <ListGroup.Item>Vitamin B1 (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin B2 (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin B3 (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin B5 (in mg)</ListGroup.Item>
    </ListGroup>
    <ListGroup variant='flush'>
      <ListGroup.Item>Vitamin B6 (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin B12 (in µg)</ListGroup.Item>
      <ListGroup.Item>Vitamin C (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin D (in µg)</ListGroup.Item>
      <ListGroup.Item>Vitamin E (in mg)</ListGroup.Item>
      <ListGroup.Item>Vitamin K (in µg)</ListGroup.Item>
      <ListGroup.Item>Folate (in µg)</ListGroup.Item>
      <ListGroup.Item>Folic Acid (in µg)</ListGroup.Item>
      <ListGroup.Item>Iodine (in µg)</ListGroup.Item>
      <ListGroup.Item>Selenium (in µg)</ListGroup.Item>
    </ListGroup>
  </Row>
  </Container>
;

const gluten = 'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).';
const keto = 'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.';
const veg = 'No ingredients may contain meat or meat by-products, such as bones or gelatin.';
const lacto = 'All ingredients must be vegetarian and none of the ingredients can be or contain egg.';
const ovo = 'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.';
const vegan = 'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.';
const pesc = 'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.';
const paleo = 'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.';
const primal = 'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.';
const whole30 = 'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.';

const Diets =
  <Container>
    <Row className="mb-3">We support a variety of diets. Click on any for additional details. </Row>
    <CollapseDiet diet={'Gluten Free'} definition={gluten}/>
    <CollapseDiet diet={'Ketogenic'} definition={keto}/>
    <CollapseDiet diet={'Vegetarian'} definition={veg}/>
    <CollapseDiet diet={'Lacto-Vegetarian'} definition={lacto}/>
    <CollapseDiet diet={'Ovo-Vegetarian'} definition={ovo}/>
    <CollapseDiet diet={'Vegan'} definition={vegan}/>
    <CollapseDiet diet={'Pescetarian'} definition={pesc}/>
    <CollapseDiet diet={'Paleo'} definition={paleo}/>
    <CollapseDiet diet={'Primal'} definition={primal}/>
    <CollapseDiet diet={'Whole 30'} definition={whole30}/>
  </Container>
;

export {
  Diets,
  Intolerances,
  Cuisines,
  CustomSearch
}