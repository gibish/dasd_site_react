import { NavLink } from "react-router-dom";

function ProjectSmall({ project, index }) {
  return (
    <li className="content__descr-img content__descr-img-proj content--dotted-bottom">
      <NavLink to={`/project/${index}`}>
        <img className="content__img content__img-proj" src={project.img} alt={project.name} />
      </NavLink>
      <div className="content__descr">
        <NavLink to={`/project/${index}`} className="content__site">
          <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name">
            {project.name}
          </span>
        </NavLink>
        <span className="content__descr-span content--justify" data-lang="proj-descr">
          {project.descr}
        </span>
        <NavLink to={`/project/${index}`} className="content__site">
          <span className="content__site-text" data-lang="proj-detail">
            {project.detail}
          </span>
        </NavLink>
      </div>
    </li>
  );
}

export default ProjectSmall;
