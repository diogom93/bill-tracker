import React from 'react';

const NavBar = props => {
    const triggerAddCategory = () => {
        props.addCategory();
    }

    return (
        <ul className="list-reset inline flex justify-center border-b-4 mb-0">
            <li className={"p-4 inline bg-gray-400 hover:bg-gray-500 uppercase font-black cursor-pointer" + (!props.activeCategory ? ' bg-gray-600' : '')}
                onClick={() => props.filterCategory('')}>All</li>
            {props.categories ?
                props.categories.map((value, index) => {
                    return <li key={index}
                        onClick={() => props.filterCategory(value)}
                        className={"p-4 inline bg-gray-400 hover:bg-gray-500 uppercase font-black cursor-pointer" + (props.activeCategory === index ? ' bg-gray-600' : '')}>{value}</li>
                }) : <li>No categories</li>
            }
            <li className="p-4 inline bg-gray-400 hover:bg-gray-500 uppercase font-black cursor-pointer" onClick={triggerAddCategory}>+</li>
        </ul>
    );
}

export default NavBar;
