import React from "react"
import { ButtonInterface } from "../../../types/popup_types"

const PrimaryButton: React.FC<ButtonInterface> = ({ button_name }) => {
  return <a className='primary-button'>{button_name}</a>
}

export default PrimaryButton
