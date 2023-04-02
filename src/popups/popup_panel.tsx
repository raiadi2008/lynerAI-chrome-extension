import React from "react"

import "./../styles/globals.css"
import { PanelTopbar } from "./components/panel_topbar"

export const PopupPanel: React.FC = () => {
  return (
    <div className='popup-panel'>
      <div className='popup-panel-header'>
        <PanelTopbar />
      </div>
    </div>
  )
}
