import { Link } from "react-router-dom"
import "./Welcome.css"

export const Welcome = () => {
  return (
    <>
      <h1>Hi</h1>
      <p className="big">My name is Moritz and I love to code!</p>
      <div className="flex-row">
        <Link className="big" to="/interests">
          Read more about me
        </Link>
        <Link className="big" to="/projects">
          Check out the code
        </Link>
      </div>
    </>
  )
}
