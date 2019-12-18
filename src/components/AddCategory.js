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
        <form className="h-100 w-full flex items-center justify-center font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-3xl text-gray-700">Enter a bill category</h1>
                    <p>E.g. 'Electricity', 'Internet' or maybe 'Gas'</p>
                    <div className="flex mt-4">
                        <input placeholder="Category name" onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500" />
                        <button onClick={handleSubmit}
                            className="flex-no-shrink p-2 border-2 rounded bg-teal-500 text-white border-teal-700 hover:text-white hover:bg-teal-600">Add category</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddCategory;