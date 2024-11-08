import React from "react";
import Photo from "../assets/test1.webp";
const About = () => {
  return (
    <article className="apropos">
      <p>
        <img src={Photo} alt="Pauline Delacour " />
        Moi, c'est Pauline !<br />
        J'ai 29 ans et suis actuellement en reconversion professionnelle vers le
        développement web grâce à une formation d'OpenClassrooms.
        <br />
        <br />
        Auparavant, j'ai travaillé comme agent logistique, un rôle qui m'a
        permis de comprendre l'importance d'être un maillon dans une chaîne de
        production plus large. On m'a également offert la chance d'assumer un
        poste de manager temporaire pendant deux fins d'année consécutives. Dans
        ce rôle, j'ai découvert les défis et les responsabilités de la gestion
        d'équipe, ainsi que l'importance de la priorisation des tâches pour
        maintenir une efficacité collective.
        <br />
        <br />
        Cette expérience m'a sensibilisée à la manière dont chaque action
        individuelle contribue à la réussite de l'ensemble des défis. Cela a
        éveillé mon intérêt pour les processus et leurs impacts directs sur le
        travail en équipe.
        <br />
        <br />
        Curieuse de nature, j’aime comprendre ce que je fais et en saisir les
        implications. Si mon parcours en logistique m'a apporté une solide
        compréhension des processus et de l'organisation, il m'a fait aussi
        ressentir un manque d'innovation et de créativité au quotidien.
        <br />
        <br />
        Animée par un besoin constant d'apprendre de nouvelles choses et de
        repousser mes compétences, je me suis tournée vers le développement web
        pour construire des projets uniques et captivants. Au cours de ma
        formation, j'ai acquis des compétences en HTML, CSS, JavaScript, et
        React, des technologies que je suis impatiente d’approfondir au sein
        d’une entreprise en alternance. Je me suis également découvert un fort
        attrait pour le UX design et le maquettage sur Figma. Pour moi,
        l'expérience en entreprise est la meilleure façon de progresser, en
        appliquant et consolidant mes connaissances.
        <br />
        <br />
        En dehors du développement, je suis passionnée de couture : j’adore
        transformer un simple morceau de tissu en quelque chose d'unique. C'est
        cette dynamique de création qui me motive jour après jour !<br />
        <br />
        Merci d'avoir pris le temps de lire ma présentation !
      </p>
    </article>
  );
};

export default About;
