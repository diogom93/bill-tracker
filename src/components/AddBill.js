import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddBill = props => {
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(props.categories[0]);

    const handleAmountChange = event => {
        setAmount(event.target.value);
    }

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    }

    const handleDateChange = date => {
        setDate(date);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!amount) {
            alert('Please enter bill amount!');
            return;
        }

        props.onSubmit(date, category, amount);
    }
    return (
        <form className="h-100 w-full flex items-center justify-center font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-3xl text-gray-700">Add a new bill</h1>
                    <p>E.g. 'Electricity', 'Internet' or maybe 'Gas'</p>
                    <div className="flex mt-4">
                        <DatePicker selected={date} onChange={handleDateChange} dateFormat="dd/MM/yyyy" />
                        <select selected={category} onChange={handleCategoryChange}
                            className="text-gray-700">
                            {props.categories ?
                                props.categories.map((value, index) =>
                                    <option key={index}>{value}</option>
                                ) : ''}
                        </select>
                        <input type="number" min="0" step="0.01" placeholder="Enter amount" onChange={handleAmountChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500" />
                        <button type="submit" onClick={handleSubmit}
                            className="flex-no-shrink p-2 border-2 rounded bg-teal-500 text-white border-teal-700 hover:text-white hover:bg-teal-600">Add bill</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddBill;