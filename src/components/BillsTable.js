import React from 'react';
import Moment from 'react-moment';

const BillsTable = props => {
    return (
        <table className="table">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr className="p-4 bg-blue-200 text-center">
                    <td colSpan="4">
                        <button className="underline" onClick={props.addBill}>Add new bill</button>
                    </td>
                </tr>
                {props.bills.map((bill, index) => {
                    return (
                        <tr className="p4" key={index}>
                            <td>{bill.category}</td>
                            <td><Moment format="D MMM YYYY">{bill.date}</Moment></td>
                            <td>{bill.amount}€</td>
                            <td onClick={() => {props.removeBill(index)}}>X</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default BillsTable;