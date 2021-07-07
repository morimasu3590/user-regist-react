import React, { useState } from 'react';
import { IUser } from '../../models/IUser';
import classes from './AddUser.module.css';
import Card from '../layout/Card';
import Button from '../layout/Button';
import ErrorModal from '../ErrorModal';

type Error = {
	title: string;
	message: string;
};
type adduserProps = {
	onClick: ({ id, username, age }: IUser) => void;
};

const AddUser = ({ onClick }: adduserProps) => {
	const [ enteredUsername, setEnteredUsername ] = useState('');
	const [ enteredAge, setEnteredAge ] = useState('');
	const [ isInvalid, setIsInvalid ] = useState(false);
	const [ error, setError ] = useState<Error>({
		title: '',
		message: ''
	});

	const username_ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const usernameValue = event.target.value;
		setEnteredUsername(usernameValue);
	};

	const age_ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const ageValue = event.target.value;
		setEnteredAge(ageValue);
	};

	const validation = () => {
		let errorObj = {
			title: '',
			message: ''
		};

		if (!!!enteredUsername && enteredUsername.trim().length <= 0) {
			errorObj.title = 'Invalid Username';
			errorObj.message = 'Please enter a valid name (non-empty values).';
			setError(errorObj);

			
			return false;
		} else if (!!!enteredAge && enteredAge.trim().length <= 0) {
			errorObj.title = 'Invalid Age';
			errorObj.message = 'Please enter a valid Age (non-empty values).';
			setError(errorObj);

			
			return false;
		}

		
		return true;
	};

	const resetValue = () => {
		setEnteredUsername('');
		setEnteredAge('');
	};

	const errorModal_ClickHandler = () => {
		setIsInvalid(false);
	};

	//const newUser = (): { user: UserObject} =>{ //how to return object with properties in typescript
	const userform_submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!validation()) {
			setIsInvalid(true);
			return;
		} else {
			setIsInvalid(false);
			const newUser = {
				id: Math.random().toLocaleString(),
				username: enteredUsername,
				age: enteredAge
			};

			onClick(newUser);
			resetValue();
		}
	};

	return (
		<div>
			{isInvalid && <ErrorModal title={error.title} message={error.message} onClick={errorModal_ClickHandler} />}
			<Card className={classes.input}>
				<form onSubmit={userform_submitHandler}>
					<div>
						<label htmlFor="username">Username</label>
						<div>
							<input
								id="username"
								type="text"
								onChange={username_ChangeHandler}
								value={enteredUsername}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="age">Age (years)</label>
						<div>
							<input id="age" type="number" min="1" onChange={age_ChangeHandler} value={enteredAge} />
						</div>
					</div>
					<div>
						<Button type="submit">Add User</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
