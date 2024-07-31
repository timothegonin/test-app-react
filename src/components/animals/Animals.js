import React from 'react'

function Animals() {
  return (
    <div>
      <h1>Animals</h1>
      <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam hic similique temporibus molestias quia ex culpa necessitatibus repellat assumenda, sed quam id optio, quis, pariatur odit debitis iste totam.</article>
      <img src="https://cdn.pixabay.com/photo/2024/06/04/10/07/black-dragon-8808267_960_720.png" alt="animal" />
      <input type="text" />
      <select name="select animal" id="animal">
        <option value="dragon"></option>
        <option value="orque"></option>
        <option value="gobelin"></option>
      </select>
      <input type="checkbox" name="terms of use" id="termsOfUses" />
      <button>Submit</button>
    </div>
  )
}

export default Animals