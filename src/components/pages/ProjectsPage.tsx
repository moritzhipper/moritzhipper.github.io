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
      description: "Helps you finding a therapist",
      link: "https://github.com/moritzhipper/",
      tags: ["Angular", "Postgres", "NX", "express.js"],
    },
    {
      name: "Keinerdeinerfreunde",
      description: "Makes people feel heard",
      link: "https://github.com/moritzhipper/",
      tags: ["React", "three.js", "fiber"],
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
  const removeHttps = (url: string): string => {
    return url.replace(/^https:\/\//, "")
  }

  return (
    <a href={link} className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="url">{removeHttps(link)}</p>
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
