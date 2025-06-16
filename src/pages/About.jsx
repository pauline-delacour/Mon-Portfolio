import React, { useEffect } from "react";

const About = () => {
  //Permet de s'assurer que la page soit en position haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Tableau vide , L'effet s'exécute une seule fois lors du chargement de la page du projet
  return (
    <article className="apropos">
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/paulinedelacour.webp`} alt="Pauline Delacour " />
        <p>Moi, c'est Pauline ! </p>
        <p>
          J'ai 30 ans et suis actuellement en reconversion professionnelle vers
          le <b>développement web</b> grâce à une formation d'OpenClassrooms.
        </p>

        <p>
          Auparavant, j'ai travaillé comme agent logistique, un rôle qui m'a
          permis de comprendre l'importance d'être un maillon dans une chaîne de
          production plus large. On m'a également offert la chance d'assumer un
          poste de manager temporaire pendant deux fins d'année consécutives.
          Dans ce rôle, j'ai découvert les défis et les responsabilités de la
          gestion d'équipe, ainsi que l'importance de la priorisation des tâches
          pour maintenir une efficacité collective.
        </p>

        <p>
          Cette expérience m'a sensibilisée à la manière dont chaque action
          individuelle contribue à la réussite de l'ensemble des défis. Cela a
          éveillé mon intérêt pour les processus et leurs impacts directs sur le
          <b> travail en équipe</b>.
        </p>
        <p>
          Curieuse de nature, j’aime comprendre ce que je fais et en saisir les
          implications. Si mon parcours en logistique m'a apporté une solide
          compréhension des processus et de l'organisation, il m'a fait aussi
          ressentir un manque d'innovation et de créativité au quotidien.
        </p>
        <p>
          Animée par un besoin constant d'apprendre de nouvelles choses et de
          repousser mes compétences, je me suis tournée vers le développement
          web pour construire des projets uniques et captivants. Au cours de ma
          formation, j'ai acquis des compétences en <b>HTML, CSS, JavaScript, et
          React</b>, des technologies que je suis impatiente d’approfondir au sein
          d’une entreprise en <b>alternance</b>. Je me suis également découvert un fort
          attrait pour le <b>UX design</b> et <b>le maquettage sur Figma</b>. Pour moi,
          l'expérience en entreprise est la meilleure façon de progresser, en
          appliquant et consolidant mes connaissances.
        </p>
        <p>
          En dehors du développement, je suis passionnée de couture : j’adore
          transformer un simple morceau de tissu en quelque chose d'unique.
          C'est cette dynamique de <b>création</b> qui me motive jour après jour !
        </p>

        <p>Merci d'avoir pris le temps de lire ma présentation !</p>
      </div>
    </article>
  );
};

export default About;
