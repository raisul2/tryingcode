import React from 'react'

const Button = ({cls,name,icon,onClick}) => {

  return (
    <button 
     onClick={onClick}
    className={`btn ${cls&&cls}`}>
       {icon&&icon}
        {name}
    </button>
  )
}

export default Button

export const PrimaryButton = ({cls,name,icon,onClick}) => {

  return (
    <button 
     onClick={onClick}
    className={`btn  bg-violet-800 hover:bg-violet-900 text-white ${cls&&cls}`}>
       {icon&&icon}
        {name}
    </button>
  )
}
