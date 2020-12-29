import React, {useState, createContext} from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [currentRecipe, setCurrentRecipe] = useState([]);

  const handleRecipes = (recipes) => {
    setRecipes(recipes);
  }
  const handleQuery = (query) => {
    setQuery(query);
  }
  const handleCurrentRecipe = (recipe) => {
    setCurrentRecipe(recipe);
  }

  const searchProps = {
    recipes, handleRecipes, currentRecipe, handleCurrentRecipe, query, handleQuery
  }

  return (
    <SearchContext.Provider value={searchProps}>
      {children}
    </SearchContext.Provider>
  )
}