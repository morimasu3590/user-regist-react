import React, { useState } from 'react';
import './App.css';
import TopContainer from './components/layout/TopContainer';
import AddUser from './components/Users/AddUser';
import Userlist from './components/Users/Userlist';
import './models/IUser';
import { IUser } from './models/IUser';

const App = () => {
	const [ users, setUsers ] = useState<IUser[]>([]);
	const Add_NewUser_Handler = ({ id: _Id, username: _name, age: _age }: IUser) => {
		const newUser = {
			id: _Id,
			username: _name,
			age: _age
		};

		setUsers((prevUsers) => {
			return prevUsers.concat(newUser);
		});
	};

	return (
		<div>
			<TopContainer>
				<AddUser onClick={Add_NewUser_Handler} />
				<Userlist users={users} />
			</TopContainer>
		</div>
	);
};

export default App;
