import React from 'react';

const NavBar = props => {
    const triggerAddCategory = () => {
        props.addCategory();
    }

    return (
        <ul>
            {props.categories ?
                props.categories.map((value, index) => {
                    return <li key={index}>{value}</li>
                }) : <li>No categories</li>
            }
            <li onClick={triggerAddCategory}>+</li>
        </ul>
    );
}

export default NavBar;
