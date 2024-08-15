import {useState} from 'react'

const btnStyle = {
  padding: '5px',
  width: '200px',
  borderRadius: '6px',
  border: '0px'
}

function IncrementCount() {
  const [count, setCount] = useState(0)
  const [btnColor, setBtnColor] = useState('orange')
  const [isChecked, setIsChecked] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const colorButton = btnColor === 'orange' ? 'cyan' : 'orange'

  const handleMouseOver = () => {
    setShowPopup(true)
  }
  const handleMouseOut = () => {
    setShowPopup(false)
  }

  const handleClick = () => {
    setCount(count+1)
    setBtnColor(colorButton)
  }
  return (
    <>
      <h1>{count}</h1>
      <div>
        <input type="checkbox" id='accept-terms' checked={isChecked} onChange={(e)=> setIsChecked(e.target.checked)}/>
        <label htmlFor="accept-terms">J'accepte <span style={{color : 'blue'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>les termes et conditions</span></label>
      </div>
      <button style={{...btnStyle, backgroundColor: btnColor}} onClick={handleClick} disabled={!isChecked}>Vous avez cliqué {count} fois</button>
      {showPopup && <div className="popup">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis, consequuntur vitae doloremque deserunt quaerat cupiditate beatae numquam architecto ad illum molestiae similique quasi atque dolores quia recusandae quis unde?
      </div>}
    </>
  )
}

export default IncrementCount