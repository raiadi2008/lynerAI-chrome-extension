import React from "react"
import { SecondaryButton } from "./secondary_button"
import { Avatar } from "./avatar"

export const PanelTopbar: React.FC = () => {
  return (
    <div className='panel-topbar'>
      <div className='panel-topbar-left'>
        <SecondaryButton button_name='search' is_active={true} />
        <SecondaryButton button_name='create' is_active={false} />
      </div>
      <div className='panel-topbar-left'>
        <Avatar />
      </div>
    </div>
  )
}
