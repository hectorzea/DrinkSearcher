import React from 'react';
import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import RecipeList from "./components/RecipeList";
import ModalProvider from "./context/ModalContext";


function App() {
    return (
        <ModalProvider>
            <CategoriesProvider>
                <RecipesProvider>
                    <Header/>
                    <div className="container mt-5">
                        <div className="row">
                            <Form/>
                        </div>
                        <RecipeList/>
                    </div>
                </RecipesProvider>
            </CategoriesProvider>
        </ModalProvider>
    );
}

export default App;
