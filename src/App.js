import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';

import AddBill from './components/AddBill';
import AddCategory from './components/AddCategory';
import BillsTable from './components/BillsTable';
import Chart from './components/Chart';
import NavBar from './components/NavBar';

function App() {
	const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false);
	const [shouldShowAddBill, setShouldShowAddBill] = useState(false);
	const [activeCategory, setActiveCategory] = useState('');
	const [categories, setCategories] = useState([]);
	const [bills, setBills] = useState([]);

	const addCategory = category => {
		const categoriesAux = [...categories, category];
		setCategories(categoriesAux);
		setShouldShowAddCategory(false);
		localStorage.setItem('categories', JSON.stringify(categoriesAux));
	}

	const addBill = (date, category, amount) => {
		const bill = { date, category, amount };
		const billsAux = [...bills, bill].sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
		setBills(billsAux);
		setShouldShowAddBill(false);
		localStorage.setItem('bills', JSON.stringify(billsAux));
	}

	const removeBill = index => {
		const billsAux = [...bills];
		billsAux.splice(index, 1);
		setBills(billsAux);
		localStorage.setItem('bills', JSON.stringify(billsAux));
	}

	const getActiveBills = () => {
		return bills.filter(bill => activeCategory ? bill.category === activeCategory : true);
	}

	const filterCategory = category => {
		setActiveCategory(category);
	}

	const showAddCategory = () => {
		setShouldShowAddCategory(true);
	}

	const showAddBill = () => {
		setShouldShowAddBill(true);
	}

	useEffect(() => {
		const categories = JSON.parse(localStorage.getItem('categories'));
		if (categories) {
			setCategories(categories);
			setShouldShowAddCategory(false);
		}

		if (!categories) {
			setShouldShowAddCategory(true);
		}

		const bills = JSON.parse(localStorage.getItem('bills'));
		if (bills) {
			setBills(bills);
		}
	}, []);

	return (
		<div className="App">
			{shouldShowAddCategory ?
				<AddCategory onSubmit={addCategory} />
				: shouldShowAddBill ?
					<AddBill categories={categories} onSubmit={addBill} />
					:
					<div>
						<NavBar categories={categories} addCategory={showAddCategory} activeCategory={activeCategory} filterCategory={filterCategory} />
						<div className="container flex">
							<div className="w-1/2">
								<BillsTable bills={getActiveBills()} addBill={showAddBill} removeBill={removeBill} />
							</div>
							<div className="w-1/2">
								<Chart bills={getActiveBills()} />
							</div>
						</div>
					</div>
			}
		</div>
	);
}

export default App;
