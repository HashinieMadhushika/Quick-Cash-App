import React, { useState } from 'react';
import './dashbord.css';

function Dashboard() {
	const [username, setUsername] = useState('');
	const [totalBalance, setTotalBalance] = useState('');
	const [youOwe, setYouOwe] = useState('');
	const [youOwn, setYouOwn] = useState('');

	return (
		<div className="dashboard-container">
			<div className="welcome-row">
				<h2>Welcome</h2>
				<input
					type="text"
					className="username-input"
					placeholder="Enter your name"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</div>
			<button className="add-expenses-btn">Add Expenses</button>

			<div className="section">
				<div className="section-row">
					<span className="section-label">Total Balance</span>
					<input
						type="number"
						className="section-input"
						placeholder="Enter total balance"
						value={totalBalance}
						onChange={e => setTotalBalance(e.target.value)}
					/>
					<button className="view-btn">View</button>
				</div>
				<button className="summary-btn">Total Summary</button>
			</div>

			<div className="section">
				<div className="section-row">
					<span className="section-label">You owe</span>
					<input
						type="number"
						className="section-input"
						placeholder="Enter amount you owe"
						value={youOwe}
						onChange={e => setYouOwe(e.target.value)}
					/>
					<button className="view-btn">View</button>
				</div>
				<button className="summary-btn">Total Summary</button>
			</div>

			<div className="section">
				<div className="section-row">
					<span className="section-label">You own</span>
					<input
						type="number"
						className="section-input"
						placeholder="Amount you own"
						value={youOwn}
						onChange={e => setYouOwn(e.target.value)}
						readOnly
					/>
					<button className="view-btn">View</button>
				</div>
				<button className="summary-btn">Total Summary</button>
			</div>
		</div>
	);
}

export default Dashboard;
