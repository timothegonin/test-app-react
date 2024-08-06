import React from 'react'
import CustomButton from '../customElement/CustomButton'

function GetByTestId() {
  return (
    <>
      <CustomButton text='Cliquez ici'/>
      <div data-testid='div-element'>
        Element
      </div>
    </>
  )
}

export default GetByTestId