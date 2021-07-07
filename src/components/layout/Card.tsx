import React, { ReactNode } from 'react';
import classes from './Card.module.css';

type cardProps = {
    className?: string;
    children: ReactNode;
}

const Card = ({className, children}: cardProps) =>{
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card;