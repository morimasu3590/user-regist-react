import React from 'react';
import { IUser } from '../../models/IUser';
import Card from '../layout/Card';
import classes from './Userlist.module.css';

type Props = {
	users: IUser[];
};

const Userlist = ({ users }: Props) => {
	const userItems_jsx = users.map((userItem, index) => {
		return <li key={index}>{`${userItem.username} (${userItem.age} years old)`}</li>;
	});

	return (
		<Card className={classes.users}>
			<ul>{userItems_jsx}</ul>
		</Card>
	);
};

export default Userlist;
