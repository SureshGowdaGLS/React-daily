import React from 'react'
const Greet = (props) => {
    return(
        <>
         <h1> I Am {props.name} Working As {props.work}</h1>
    {props.children}
    </>
    )
}

export default Greet