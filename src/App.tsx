import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Imprint } from "./components/Imprint"
import { Privacy } from "./components/Privacy"
import { Projects } from "./components/Projects"
import { Scene } from "./components/Scene"
import { Welcome } from "./components/Welcome"

type DidAnimateContextType = {
  didAnimate: boolean
  setDidAnimate: (arg: boolean) => void
}

export const DidAnimateContext = createContext<DidAnimateContextType>({
  didAnimate: false,
  setDidAnimate: () => {},
})

function App() {
  const [didAnimate, setDidAnimate] = useState(false)

  return (
    <>
      <main>
        <Routes>
          <Route
            element={
              <DidAnimateContext.Provider value={{ didAnimate, setDidAnimate }}>
                <Welcome />
              </DidAnimateContext.Provider>
            }
            path="/"
          />
          <Route element={<Projects />} path="/projects" />
          <Route element={<AboutMe />} path="/interests" />
          <Route element={<Imprint />} path="/imprint" />
          <Route element={<Privacy />} path="/privacy" />
        </Routes>
      </main>
      <Footer />
      <Scene />
    </>
  )
}

export default App
