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
	const [categories, setCategories] = useState([]);

	const addCategory = category => {
		const categoriesAux = [...categories, category];
		setCategories(categoriesAux);
		setShouldShowAddCategory(false);
		localStorage.setItem('categories', JSON.stringify(categoriesAux));
	}

	const showAddCategory = () => {
		setShouldShowAddCategory(true);
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
	}, []);

	return (
		<div className="App">
			{shouldShowAddCategory ? (
				<AddCategory onSubmit={addCategory} />
			) : (
					<div>
						<NavBar categories={categories} addCategory={showAddCategory} />
						<div className="container">
							<div className="box">
								<BillsTable />
							</div>
							<div className="box">
								<Chart />
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default App;
