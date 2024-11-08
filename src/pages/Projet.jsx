import React, { useEffect } from "react";
import project from "../data/project.json";
import Collapse from "../components/Collapse";
import ProjectImage from "../components/ProjectImage";
import { useParams } from "react-router-dom";

const Projet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const projet = project.find((element) => element.id === id);

  if (!projet) {
    return <div>Projet Introuvable</div>;
  }
  return (
    <div className="projet-page">
      <ProjectImage cover={projet.cover} title={projet.title} />

      <div className="dessous-image">
        <span className="title">{projet.title}</span>
        <div className="lien">
        <a
          href={projet.lien}
          className="lien"
          target="_blank"
          rel="noopener noreferrer"
        >
          {projet.lien}
        </a>
        </div>
      </div>

      <div className="projet-collapse">
        <Collapse title="Description" content={projet.description} />
        <Collapse
          title="Technologies"
          content={projet.technologies}
        />
      </div>
    </div>
  );
};

export default Projet;
