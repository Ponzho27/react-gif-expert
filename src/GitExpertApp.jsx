import { useState } from "react";
// import { AddCategory } from "./components/AddCategory"
// import { GirdGif } from "./components/GridGif";
import { AddCategory, GirdGif } from "./components"; // Esto es por el archvio de barril

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Push']);

    const onAddCategory = (newCategory) =>{
        console.log(newCategory)
        // setCategories([...categories, v]); -- al ultimo
        // setCategories([v, ...categories]); -- al principioo

        if(categories.includes(newCategory)) return;

        setCategories(cat => [newCategory, ...cat]);
    };

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
            ></AddCategory>
            { 
                categories.map((category, index) => (<GirdGif key={index+category} category={category}></GirdGif>) )
            } 
        </>
    )
}