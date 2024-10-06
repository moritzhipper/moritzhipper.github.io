import { Route, Routes } from "react-router-dom"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Imprint } from "./components/Imprint"
import { Privacy } from "./components/Privacy"
import { Projects } from "./components/Projects"
import { Scene } from "./components/Scene"
import { Welcome } from "./components/Welcome"

function App() {
  return (
    <>
      <main className="foreground">
        <Routes>
          <Route element={<Welcome />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<AboutMe />} path="/interests" />
          <Route element={<Imprint />} path="/imprint" />
          <Route element={<Privacy />} path="/privacy" />
        </Routes>
      </main>
      <Scene />
      <Footer />
    </>
  )
}

export default App
