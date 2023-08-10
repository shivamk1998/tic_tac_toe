import React from 'react';
import './Box.css'

function Box({value, onClick, id}){
  return (
   <button key={id} className={`box ${value==="X"?"x":"o"}`} onClick={onClick}>{value}</button>
      
    
  )
}

export default Box;