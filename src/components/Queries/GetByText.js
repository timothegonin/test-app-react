import React from 'react'

function GetByText() {
  return (
    <React.Fragment>
      <input type="button" value="Changer la couleur" />
      <p>Veuillez indiquer votre identité</p>
      <form>
        <div>
          <label htmlFor="firstname" >Prénom</label>
          <input type="text" id="firstname" placeholder='Indiquez votre prénom'/>
          <label htmlFor="lastname" >Nom</label>
          <input type="text" id="lastname" placeholder='Indiquez votre nom'/>
        </div>
        <input type='submit' value={'Valider'}/>
      </form>
    </React.Fragment>
  )
}

export default GetByText