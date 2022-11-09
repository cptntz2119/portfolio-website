// import { Link } from 'react-router-dom';
import PROJECTS from '../data';
import ProjectCard from './ProjectCard';
import "../styles/Project.css";

const Projects = () => {
  return (
    <div>
      <div className='projects-container'>
      {PROJECTS.map((project, index) => (
            <div  className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
