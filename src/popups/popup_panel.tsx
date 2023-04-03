import React from "react"

import "./../styles/globals.css"
import Search from "./components/search/search"
import ProjectCard from "./components/project_card/project_card"
import PanelTopbar from "./components/panel_topbar/panel_topbar"

export const PopupPanel: React.FC = () => {
  return (
    <div className='popup-panel'>
      <div className='popup-panel-header'>
        <PanelTopbar />
      </div>
      <div className='popup-panel-active-project'>
        <ProjectCard
          project_name='My First Project'
          project_description='My first project description'
          created_at='12th March 2023'
          created_by='Aditya Rai'
        />
      </div>
    </div>
  )
}
