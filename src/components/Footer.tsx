import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="mt-l foreground">
      <Link to="/imprint">Imprint</Link>
      <Link to="/privacy">Privacy</Link>
    </footer>
  )
}
