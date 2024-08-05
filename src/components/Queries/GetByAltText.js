import React from 'react'
import btnImg from '../../images/green-button.png'

function GetByAltText() {
  return (
    <React.Fragment>
      <img src="https://cdn.pixabay.com/photo/2024/06/04/10/07/black-dragon-8808267_960_720.png" alt="Dragon" width={400}/>
      <form>
        <label htmlFor="firstname" >Prénom</label>
        <input type="text" id="firstname" placeholder='Indiquez votre prénom' value='Stan' onChange={()=>{}}/>
        <label htmlFor="lastname" >Nom</label>
        <input type="text" id="lastname" placeholder='Indiquez votre nom' value='Smith' onChange={()=>{}}/>
        <textarea value="Bonjour à tous" />
        <div>
          <input type='image' alt="valider" src={btnImg} width='40'/>
        </div>
      </form>
    </React.Fragment>
  )
}

export default GetByAltText