import React from 'react'

function GetByLabelText() {
  return (
    <form>
      <div>
        <label htmlFor="firstname" >Prénom</label>
        <input type="text" id="firstname"/>
        <label htmlFor="lastname" >Nom</label>
        <input type="text" id="lastname"/>
      </div>
      <div>
        <label id="username-label">Username</label>
        <input type="text"  aria-labelledby="username-label" />
      </div>
      <div>
        <label htmlFor="pet-select">Choisissez un animal:</label>
        <select name="pets" id="pet-select" size={3}>
          <option value="dragon">Dragon</option>
          <option value="orque">Orque</option>
          <option value="gobelin">Gobelin</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms and conditions" />
          Accept the terms and conditions
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" id="newsletter" />
          <span>I subscribe to the newsletter</span>
        </label>
      </div>
    </form>
  )
}

export default GetByLabelText