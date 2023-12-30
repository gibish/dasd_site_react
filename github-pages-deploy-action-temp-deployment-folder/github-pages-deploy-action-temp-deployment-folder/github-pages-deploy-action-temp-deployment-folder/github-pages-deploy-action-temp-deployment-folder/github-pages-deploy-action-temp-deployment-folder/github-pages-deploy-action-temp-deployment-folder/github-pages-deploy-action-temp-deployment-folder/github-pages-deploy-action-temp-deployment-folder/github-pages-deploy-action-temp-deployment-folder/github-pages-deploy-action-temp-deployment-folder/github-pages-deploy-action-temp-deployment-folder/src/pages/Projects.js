import { useContext, useEffect, useState } from "react";
import { CurrentLanguageContext } from "../App";

import Text from "../lng/lng_projects";
import TextAll from "../lng/lng_projects_all";
import ProjectSmall from "../components/projectSmall/ProjectSmall";

function Projects() {
  const { currentLanguage } = useContext(CurrentLanguageContext);
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    for (const key in Text) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = Text[key][currentLanguage];
      }
    }

    let projectsTrans = TextAll.map((textOne) => {
      let s = {};
      s.name = textOne["proj-name"][currentLanguage];
      s.img = textOne["proj-img"];
      s.descr = textOne["proj-descr"][currentLanguage];
      s.detail = textOne["proj-detail"][currentLanguage];
      return s;
    });

    setCurrentProjects(projectsTrans);
  }, [currentLanguage]);

  return (
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="proj-content-welcome">
            Projects
          </div>
          {currentProjects.map((project) => {
            return <ProjectSmall project={project} />;
          })}
          <br />
          <br />
        </div>
      </div>
    </main>
  );
}

export default Projects;
