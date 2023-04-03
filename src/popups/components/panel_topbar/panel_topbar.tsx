import React from "react"

import { Avatar } from "../avatar/avatar"
import PrimaryLinkButton from "../buttons/primary_link_button"

const PanelTopbar: React.FC = () => {
  return (
    <div className='panel-topbar'>
      <div className='panel-topbar-left'>
        <PrimaryLinkButton button_name='active' is_active={true} />
        <PrimaryLinkButton button_name='create' is_active={false} />
      </div>
      <div className='panel-topbar-left'>
        <Avatar />
      </div>
    </div>
  )
}

export default PanelTopbar
