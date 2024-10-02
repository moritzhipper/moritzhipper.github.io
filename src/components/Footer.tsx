import { Link, useLocation } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  const { pathname } = useLocation()

  return (
    <footer className="mt-l">
      {pathname !== "/" && (
        <Link className="back big" to="/">
          {"<"} back
        </Link>
      )}
      <Link to="/imprint">Imprint</Link>
      <Link to="/privacy">Privacy</Link>
    </footer>
  )
}
