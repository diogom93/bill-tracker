import React, { useState } from 'react';

const AddCategory = props => {
    const [category, setCategory] = useState();

    const handleChange = event => {
        setCategory(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!category) {
            alert('Please enter a category!');
            return;
        }

        props.onSubmit(category);
    }

    return (
        <form>
            <h1>Enter a bill category</h1>
            <p>E.g. 'Electricity', 'Internet' or maybe 'Gas'</p>
            <input placeholder="Category name" onChange={handleChange} />
            <button onClick={handleSubmit}>Add category</button>
        </form>
    );
}

export default AddCategory;