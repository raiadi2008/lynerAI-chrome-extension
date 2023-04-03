import React from "react"
import { ButtonInterface } from "../../../types/popup_types"

const SecondaryButton: React.FC<ButtonInterface> = ({ button_name }) => {
  return <a className='secondary-button'>{button_name}</a>
}

export default SecondaryButton
