

const Cuisines = [
  "African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
]

const Diets = [
  "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole 30"
]

const Intolerances = [
  "Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"
]

const Nutrients = [
  "Calories (in kcal)", "Fat (in g)", "Saturated Fat (in g)", "Protein (in g)", "Cholesterol (in mg)", "Carbs (in g)", "Alcohol (in g)", "Fiber (in g)", "Sugar (in g)", "Sodium (in mg)", "Caffeine (in mg)"
]

const Vitamins = [
  "Calcium (in mg)", "Choline (in mg)", "Copper (in mg)", "Fluoride (in mg)", "Folate (in µg)", "Folic Acid (in µg)", "Iodine (in µg)", "Iron (in mg)", "Magnesium (in mg)", "Manganese (in mg)", "Phosphorus (in mg)", "Potassium (in mg)", "Selenium (in µg)", "Vitamin A (in IU)", "Vitamin B1 (in mg)", "Vitamin B2 (in mg)", "Vitamin B3 (in mg)", "Vitamin B5 (in mg)", "Vitamin B6 (in mg)", "Vitamin B12 (in µg)", "Vitamin C (in mg)", "Vitamin D (in µg)", "Vitamin E (in mg)", "Vitamin K (in µg)", "Zinc (in mg)"
]

const APIParams = [
  "Carbs", "Protein", "Calories", "Fat", "Alcohol", , "Caffeine", "Copper", "Calcium", "Choline", "Cholesterol", "Flouride", "SaturatedFat", "VitaminA", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "VitaminB1","VitaminB2", "VitaminB5", "VitaminB3", "VitaminB6", "VitaminB12", "Fiber", "Folate", "FolicAcid", "Iodine", "Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Selenium", "Sodium", "Sugar", "Zinc"
]

const cuisine = Cuisines.map(c => <option key={c} value={c}>{c}</option>)
const diet = Diets.map(d => <option key={d} value={d}>{d}</option>)
const intolerance = Intolerances.map(i => <option key={i} value={i}>{i}</option>)
const nutrient = Nutrients.map(n => <option key={n} value={n}>{n}</option>)
const vitamin = Vitamins.map(v => <option key={v} value={v}>{v}</option>)

export {
  cuisine,
  diet,
  intolerance,
  nutrient,
  vitamin,
}