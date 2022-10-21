import React from 'react'
import { useState } from 'react'
const Message = () => {
   const [message, setMessage] = useState('Welcome Visitor')
    return(
        <>
         <h1> {message} </h1>
         <button onClick={() => setMessage('Thank You For Subscribing')} >Subscribe</button>
    </>
    )
}

export default Message