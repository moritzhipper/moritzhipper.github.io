import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { AboutMePage } from "./components/pages/AboutMePage"
import { ImprintPage } from "./components/pages/ImprintPage"
import { PrivacyPage } from "./components/pages/PrivacyPage"
import { ProjectsPage } from "./components/pages/ProjectsPage"
import { Welcome } from "./components/pages/WelcomePage"
import { Scene } from "./components/Scene"
import { Spinner } from "./components/Spinner"

function App() {
  return (
    <>
      <Spinner />
      <main>
        <Routes>
          <Route element={<Welcome />} path="/" />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<AboutMePage />} path="/interests" />
          <Route element={<ImprintPage />} path="/imprint" />
          <Route element={<PrivacyPage />} path="/privacy" />
        </Routes>
      </main>
      <Scene />
      <Footer />
    </>
  )
}

export default App
