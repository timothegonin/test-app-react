import React from 'react'

function GetByPlaceholderText() {
  return (
    <form>
      <div>
        <label htmlFor="firstname" >Prénom</label>
        <input type="text" id="firstname" placeholder='Indiquez votre prénom'/>
        <label htmlFor="lastname" >Nom</label>
        <input type="text" id="lastname" placeholder='Indiquez votre nom'/>
      </div>
    </form>
  )
}

export default GetByPlaceholderText