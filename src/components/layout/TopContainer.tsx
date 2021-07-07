import React from "react";

type topProps = {
    children: React.ReactNode;
}
const TopContainer = ({children} : topProps) =>{
    return(
        <div>
            {children}
        </div>
    )
}

export default TopContainer;