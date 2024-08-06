import React from 'react'

const GetAllByRole = ({btns}) => {
  return (
    <ul>
      {btns.map(btn=><li key={btn}><button>{btn}</button></li>)}
    </ul>
  )
}

export default GetAllByRole