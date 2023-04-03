import React from "react"
import { ProjectCardInterface } from "../../../types/popup_types"
import PrimaryButton from "../buttons/primary_button"

const ProjectCard: React.FC<ProjectCardInterface> = ({
  project_name,
  project_description,
  created_at,
  created_by,
}) => {
  return (
    <div className='project-card'>
      <div className='project-card-name'>{project_name}</div>
      <div className='project-card-description'>{project_description}</div>
      <div className='project-card-meta'>
        <div className='project-card-meta-info'>{created_at}</div>
        <div className='project-card-meta-info'>{created_by}</div>
      </div>
      <div className='project-card-buttons'>
        <PrimaryButton button_name='Open' />
      </div>
    </div>
  )
}

export default ProjectCard
