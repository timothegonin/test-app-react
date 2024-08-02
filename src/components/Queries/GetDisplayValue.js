import React from 'react'

function GetByDisplayValue() {
  return (
    <form>
      <label htmlFor="firstname" >Prénom</label>
      <input type="text" id="firstname" placeholder='Indiquez votre prénom' value='Stan' onChange={()=>{}}/>
      <label htmlFor="lastname" >Nom</label>
      <input type="text" id="lastname" placeholder='Indiquez votre nom' value='Smith' onChange={()=>{}}/>
      <textarea value="Bonjour à tous" />
      <input type='submit' value={'Valider'}/>
    </form>
  )
}

export default GetByDisplayValue