import React, { useState } from 'react';
import './App.css';
import './styles.css';

import AddBill from './components/AddBill';
import AddCategory from './components/AddCategory';
import BillsTable from './components/BillsTable';
import Chart from './components/Chart';
import NavBar from './components/NavBar';

function App() {
	const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
	return (
		<div className="App">
			{shouldShowAddCategory ? (
				<AddCategory />
			) : (
					<div>
						<NavBar />
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
