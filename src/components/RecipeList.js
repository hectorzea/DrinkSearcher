import React,{useContext} from 'react';
import {RecipesContext} from "../context/RecipesContext";
import Recipe from "./Recipe";


const RecipeList = () => {
    const {recipes} =   useContext(RecipesContext);
    console.log(recipes);
    return (
       <div className="row">
           {recipes.map( recipe =>(
               <Recipe recipe={recipe} key={recipe.idDrink}/>
           ))}
       </div>
    );
};

export default RecipeList;