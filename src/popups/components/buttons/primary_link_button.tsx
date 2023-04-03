import React from "react"

import { PrimaryLinkButtonInterface } from "../../../types/popup_types"

const PrimaryLinkButton: React.FC<PrimaryLinkButtonInterface> = ({
  button_name,
  is_active,
}) => {
  if (is_active)
    return (
      <a href='#' className='primary-link-button active'>
        {button_name}
      </a>
    )
  else {
    return (
      <a href='#' className='primary-link-button inactive'>
        {button_name}
      </a>
    )
  }
}

export default PrimaryLinkButton
