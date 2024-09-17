import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue == undefined) return;
        if(inputValue.trim().length <= 1) return;

        // onAddCategories((categories) => [...categories, inputValue]);
        onNewCategory(inputValue);
        setInputValue("");
    }

    return (
        // <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Buscar Gifs"
                    maxLength={100}
                    value={inputValue}
                    onChange={ (event) => onInputChange(event)}
                    />
            </form>
        // </>
    );
}