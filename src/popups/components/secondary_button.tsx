import React from "react"

import { SecondaryButtonInterface } from "../../types/popup_types"

export const SecondaryButton: React.FC<SecondaryButtonInterface> = ({
  button_name,
  is_active,
}) => {
  if (is_active)
    return (
      <a href='#' className='secondary-button active'>
        {button_name}
      </a>
    )
  else {
    return (
      <a href='#' className='secondary-button inactive'>
        {button_name}
      </a>
    )
  }
}
