import React from 'react';
import classes from './ErrorModal.module.css';
import Card from './layout/Card';
import Button from './layout/Button';

type errorModalProps = {
	title: string;
	message: string;
    onClick: () => void;
};

const ErrorModal = ({ title, message, onClick }: errorModalProps) => {

    const error_ClickHandler = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) =>{
        event.preventDefault();
        onClick();
    }

	return (
		<div>
			<div className={classes.backdrop} onClick={error_ClickHandler} />
			<Card className={classes.modal}>
				<header>
					<h2 className={classes.header}>{title}</h2>
				</header>
				<div className={classes.content}>
					<p>{message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={error_ClickHandler}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
