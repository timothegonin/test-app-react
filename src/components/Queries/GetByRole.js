import React from 'react'

function GetByRole() {
  return (
    <React.Fragment>
      <div>
        <h1>Adopter un animal</h1>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam hic similique temporibus molestias quia ex culpa necessitatibus repellat assumenda, sed quam id optio, quis, pariatur odit debitis iste totam.</p>
          <img src="https://cdn.pixabay.com/photo/2024/06/04/10/07/black-dragon-8808267_960_720.png" alt="Dragon" width={400}/>
        </article>
        <button>Submit</button>
      </div>
      <form>
        <div>
          <label htmlFor="name" >Nom</label>
          <input type="text" id="name"/>
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
            I subscribe to the newsletter
          </label>
        </div>
      </form>
    </React.Fragment>
  )
}

export default GetByRole