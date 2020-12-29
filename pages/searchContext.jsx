import React, {useState, createContext} from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);

  const handleRecipes = (recipes) => {
    setRecipes(recipes);
  }

  const searchProps = {
    recipes, handleRecipes
  }

  return (
    <SearchContext.Provider value={searchProps}>
      {children}
    </SearchContext.Provider>
  )
}