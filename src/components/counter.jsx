//react event use allways camel casing 

import React from 'react'

import { useState } from 'react';

function Counter() {
  const [variable , setVariable] = useState(0)
  
  return (
    <>
    <p>Button clicked {variable} times</p>
    <button onClick={()=>{
     
      setVariable(variable+1);

    }}>Click me</button>
    
    </>
  )
}

export default Counter