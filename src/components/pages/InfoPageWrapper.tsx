import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "./InfoPageWrapper.css"

type Props = {
  header: string
  children: ReactNode
}

export const InfoPageWrapper = ({ header, children }: Props) => {
  return (
    <div className="info-page-wrapper animate-fly-in">
      <div className="header">
        <h1>{header}</h1>
        <Link to="/" className="page back">
          (x)
        </Link>
      </div>
      {children}
    </div>
  )
}
