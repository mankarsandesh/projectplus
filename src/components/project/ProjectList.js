import React, { Component } from "react";
import ProjectSummery from "./ProjectSummary";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
     { projects && projects.map(project => {
       return (
         <ProjectSummary project={project} key={project.id} />
       )
     })}
    </div>
  );
};

export default ProjectList;
