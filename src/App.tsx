import { Route, Routes } from "react-router-dom"
import "./App.css"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Imprint } from "./components/Imprint"
import { Privacy } from "./components/Privacy"
import { Projects } from "./components/Projects"
import { Welcome } from "./components/Welcome"

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<Welcome />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<AboutMe />} path="/interests" />
          <Route element={<Imprint />} path="/imprint" />
          <Route element={<Privacy />} path="/privacy" />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
