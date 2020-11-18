import React, {useContext, useState} from 'react';
import {ModalContext} from "../context/ModalContext";

import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const showIngredients = (information) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        if (information[`strIngredient${i}`]){
            ingredients.push(
                <li>{information[`strIngredient${i}`] } {information[`strMeasure${i}`] }</li>
            )
        }
    }
    return ingredients;
};

const Recipe = ({recipe}) => {
    const {recipeInfo, setIdRecipe, setRecipe} = useContext(ModalContext);

    //modal config

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
        setIdRecipe(null);
        setRecipe({});
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
                <img src={recipe.strDrinkThumb} alt={`imagen de ${recipe.strDrink}`} className="card-img-top"/>
                <div className="card-body">
                    <button onClick={() => {
                        setIdRecipe(recipe.idDrink);
                        handleOpen(true);
                    }} type='button' className='btn btn-block btn-primary'>
                        See recipe
                    </button>
                    <Modal open={open} onClose={handleClose}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInfo.strDrink}</h2>
                            <h3 className="mt-4"> Instructions</h3>
                            <p>{recipeInfo.strInstructions}</p>
                            <img src={recipeInfo.strDrinkThumb} alt="" className="img-fluid my-4"/>
                            <h3>Ingredients</h3>
                            <ul>
                                {showIngredients(recipeInfo)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Recipe;