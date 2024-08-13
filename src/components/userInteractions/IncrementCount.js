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
  return (
    <>
      <h1>{count}</h1>
      <button style={{...btnStyle, backgroundColor: btnColor}}>Vous avez cliqué {count} fois</button>
    </>
  )
}

export default IncrementCount