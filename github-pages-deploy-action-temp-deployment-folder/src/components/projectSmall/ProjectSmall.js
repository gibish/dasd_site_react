function ProjectSmall({ project }) {
  console.log("PPP", project);
  return (
    <div className="content__descr-img content__descr-img-proj content--dotted-bottom">
      <img className="content__img content__img-proj" src={project.img} alt="Floratest" />
      <div className="content__descr">
        <a className="content__site" href="./project01.html">
          <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name">
            {project.name}
          </span>
        </a>
        <span className="content__descr-span content--justify" data-lang="proj-descr">
          {project.descr}
        </span>
        <a className="content__site" href="./project01.html">
          <span className="content__site-text" data-lang="proj-detail">
            {project.detail}
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectSmall;
