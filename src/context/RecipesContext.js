import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const RecipesContext = createContext();

export const RecipesProvider = (props) => {
        const [recipes, setSaveRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState({
        ingredient: '',
        category: ''
    });

    const [handleSearch, setHandleSearch] = useState(false);

    const {ingredient, category} = searchRecipe;

    useEffect(() => {
        if (handleSearch) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const result = await axios.get(url);
                setSaveRecipes(result.data.drinks);
            };
            getRecipes();
        }
    }, [searchRecipe]);


    return (<RecipesContext.Provider value={{setSearchRecipe, setHandleSearch, recipes}}>{props.children}</RecipesContext.Provider>)
};

export default RecipesProvider;