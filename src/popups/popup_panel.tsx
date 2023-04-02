import React from "react"

import "./../styles/globals.css"
import { PanelTopbar } from "./components/panel_topbar"
import { Search } from "./components/search/search"

export const PopupPanel: React.FC = () => {
  return (
    <div className='popup-panel'>
      <div className='popup-panel-header'>
        <PanelTopbar />
        <Search />
      </div>
    </div>
  )
}
