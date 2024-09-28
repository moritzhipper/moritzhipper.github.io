import { Link } from "react-router-dom"
import "./Welcome.css"

export const Welcome = () => {
  return (
    <>
      <h1>Hi there!</h1>
      <p className="big">My name is Moritz and I love to code :)</p>
      <p className="big">
        I know about Angular, React, Express.js, Spring, PostgreSQL, modern AI
        APIs and the surrounding technologies.
      </p>
      <p className="big">
        I’ve also got solid experience with Docker, Kubernetes and software
        architecture, making sure projects are built on a strong and scalable
        foundation.
      </p>
      <div className="flex-row">
        <Link className="big" to="/interests">
          Read more about me
        </Link>
        <Link className="big" to="/projects">
          Check out some of my code
        </Link>
      </div>
    </>
  )
}
