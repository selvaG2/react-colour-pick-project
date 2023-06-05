import React from 'react'
import colorNames from 'colornames'


const InputValue = ({colorValue,setColorvalue,setHexValue,isDarkTxt,setisDarkTxt}) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={colorValue}
          placeholder='Enter a colour name'
          required
          autoFocus
         onChange={(e) => {
          setColorvalue(e.target.value);
          setHexValue(colorNames(e.target.value))
         }}
        />

        <button onClick={() => setisDarkTxt(!isDarkTxt)}>
          Toggle for text color
        </button>
      </form>
    </div>
  )
}

export default InputValue