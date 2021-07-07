import React from "react";
import classes from './Button.module.css';


type buttonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({children, type, onClick}:  buttonProps) =>{
    return(
        <button className={classes.button} 
                type={type || 'button'}
                onClick={onClick}>
            {children}
        </button>
    )

}

export default Button;