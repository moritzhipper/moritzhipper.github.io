import { InfoPage } from "./InfoPage"
import "./Projects.css"

export const Projects = () => {
  const projects = [
    {
      name: "This Website",
      description: "You're looking at it. Check out out the code!",
      link: "https://moritzhipper.com",
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
      link: "https://keinerdeinerfreunde.de",
      tags: ["React", "three.js", "fiber"],
    },
  ]
  return (
    <>
      <InfoPage header="Some Projects">
        <div className="project-wrapper grid">
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      </InfoPage>
    </>
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
    <a href="{link}" className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="url">{link}</p>
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
