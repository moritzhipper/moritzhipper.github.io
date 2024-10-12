import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="mt-l foreground">
      <Link to="/imprint" className="page">
        Imprint
      </Link>
      <Link to="/privacy" className="page">
        Privacy
      </Link>
    </footer>
  )
}
