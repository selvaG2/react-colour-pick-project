import React from 'react'

const Square = ({colorValue,hexValue,isDarkTxt}) => {
  return (
    <section className='square'
    style={{
        backgroundColor : colorValue,
        color:isDarkTxt ? "#000" : "#fff"
    }}>
        <p>{colorValue ? colorValue : "Give some colour name"}</p>
        <p>{hexValue ? hexValue : null}</p>

    </section>
  )
}

Square.defaultprpos ={
    colorValue : "Empty"
}

export default Square