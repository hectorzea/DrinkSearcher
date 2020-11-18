import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
//creating the context
export const CategoriesContext = createContext();

// provider
export const CategoriesProvider = (props) => {

    const [categories, setCategories] = useState('');

    //first call of the API

    useEffect(() => {
        const getCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const response = await axios.get(url);
            console.log(response.data.drinks);
            setCategories(response.data.drinks);
        };
        getCategories()
    }, []);

    return (<CategoriesContext.Provider value={{categories}}>
        {props.children}
    </CategoriesContext.Provider>)


};

export default CategoriesProvider;