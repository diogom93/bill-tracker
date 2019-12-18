import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

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

    const handleDateChange = event => {
        setDate(event.target.value);
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
        <form>
            <h1>Add a new bill</h1>
            <DatePicker selected={date} onChange={handleDateChange} />
            <select selected={category} onChange={handleCategoryChange}>
                {props.categories ?
                    props.categories.map((value, index) =>
                        <option key={index}>{value}</option>
                    ) : ''}
            </select>
            <input type="number" min="0" step="0.01" placeholder="Enter amount" onChange={handleAmountChange} />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default AddBill;