import { ReactNode } from "react"
import { Link } from "react-router-dom"
import classes from "./InfoPage.module.css"

type Props = {
  header: string
  children: ReactNode
}

export const InfoPage = ({ header, children }: Props) => {
  return (
    <>
      <h1 className={classes.h1}>
        {header} <Link to="/">(back)</Link>
      </h1>
      {children}
    </>
  )
}
