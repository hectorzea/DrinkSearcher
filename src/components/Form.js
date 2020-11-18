import React, {useContext, useEffect, useState} from 'react';
import {CategoriesContext} from "../context/CategoryContext";
import {RecipesContext} from "../context/RecipesContext";

const Form = () => {
    const {categories} = useContext(CategoriesContext);
    const {setSearchRecipe, setHandleSearch} = useContext(RecipesContext);

    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    });

    const setRecipeData = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form action="" className='col-12' onSubmit={(e) => {
            e.preventDefault();
            setSearchRecipe(search);
            setHandleSearch(true);
        }}>
            <fieldset className='text-center'>
                <legend>Search drinks by category / ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input onChange={setRecipeData} type="text" name='ingredient' className='form-control'
                           placeholder='search by ingredient...'/>
                </div>
                <div className="col-md-4">
                    <select onChange={setRecipeData} className='form-control' name='category' id="">
                        <option value=""> ---select a category---</option>
                        {categories && categories.map((category) => (
                            <option value={category.strCategory} key={category.strCategory}>
                                {category.strCategory}
                            </option>))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className='btn btn-block btn-primary' value='search recipes'/>
                </div>
            </div>
        </form>
    );
};

export default Form;