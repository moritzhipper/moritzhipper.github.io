import { InfoPageWrapper } from "./InfoPageWrapper"
import "./ProjectsPage.css"

export const ProjectsPage = () => {
  const projects = [
    {
      name: "This Website",
      description: "You're looking at it. Check out out the code!",
      link: "https://github.com/moritzhipper/moritzhipper.github.io",
      tags: ["React", "Vite"],
    },
    {
      name: "Buddy",
      description:
        "Responsive PWA helping users finding a doctor while organically building a doctor database",
      link: "https://github.com/moritzhipper/buddy",
      tags: ["Angular", "Postgres", "Express", "NgRx", "Nx Monorepo"],
    },
    {
      name: "batakali",
      description:
        "Creative website keeping users interested using interactive WebGL 3D Graphics",
      link: "https://batakali.com",
      tags: ["React", "three.js", "react-spring"],
    },
    {
      name: "Esy Music",
      description:
        "A Band website featuring releases and tour updates with CD via Github Actions",
      link: "https://github.com/moritzhipper/esy-crew",
      tags: ["Eleventy", "Github Actions"],
    },
  ]
  return (
    <InfoPageWrapper header="Some Projects">
      <div className="project-wrapper grid">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </InfoPageWrapper>
  )
}

type ProjectProps = {
  name: string
  description: string
  link: string
  tags: string[]
}

const Project = ({ name, description, link, tags }: ProjectProps) => {
  return (
    <a href={link} className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="tag-wrapper">
        {tags.map((tag, i) => (
          <div className="tag" key={i}>
            {tag}
          </div>
        ))}
      </div>
    </a>
  )
}
