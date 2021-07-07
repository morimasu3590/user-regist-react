import React, { useState } from 'react';
import '../models/IUser';
import { IUser } from '../../models/IUser';
import './AddUser.module.css';

type adduserProps = {
	onClick: ({id, username, age}: IUser) => void;
};

const AddUser = ({ onClick }: adduserProps) => {
	const [ username, setUsername ] = useState('');
	const [ age, setAge ] = useState('');
	

	const username_ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const usernameValue = event.target.value;
		setUsername(usernameValue);
	};

	const age_ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const ageValue = event.target.value;
		setAge(ageValue);
	};

	const validation = () =>{
		if(!!!username && username.trim().length <= 0){
			return false;
		}
		else if(!!!age && age.trim().length <= 0){
			return false;
		}
			
		return true;
	} 

	//const newUser = (): { user: UserObject} =>{ //how to return object with properties in typescript
	const userform_submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		
		if(!validation()){
			
			alert('invalid value');
			return;
		}
		
        const newUser = {
			id: Math.random().toLocaleString(),
			username: username,
			age: age
		};

        onClick(newUser);
		
	};

	return (
		<section>
			<form onSubmit={userform_submitHandler}>
				<div>
					<label htmlFor="username">Username</label>
					<div>
						<input id="username" type="text" onChange={username_ChangeHandler} />
					</div>
				</div>
				<div>
					<label htmlFor="age">Age (years)</label>
					<div>
						<input id="age" type="number" min="1" onChange={age_ChangeHandler} />
					</div>
				</div>
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
		</section>
	);
};

export default AddUser;
