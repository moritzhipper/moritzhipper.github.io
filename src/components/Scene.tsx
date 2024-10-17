import { useEffect, useState } from "react"
import background from "../assets/images/background.png"
import doggo from "../assets/images/doggo.png"
import lamp from "../assets/images/lamp.png"
import plant from "../assets/images/plant.png"
import { initiatorState } from "../initiator-state"
import { useMousePosition } from "../useMousePosition"
import "./Scene.css"

export const Scene = () => {
  const [loadedImagesCount, setLoadedImagesCount] = useState(0)
  const { setImagesLoadingFinished } = initiatorState()
  const acceleration = useMousePosition()

  const displacementBackground = {
    transform: `translate(${acceleration.x * 40}px, ${acceleration.y * 8}px)`,
  }
  const displacementMiddleground = {
    transform: `translate(${acceleration.x * 35}px, ${acceleration.y * 6}px)`,
  }

  const displacementForeground = {
    transform: `translate(${acceleration.x * 20}px, ${acceleration.y * 6}px)`,
  }

  useEffect(() => {
    if (loadedImagesCount !== 4) return

    // short timeout to wait for image to be rendered, so it doesnt just 'pop in'
    const imagesLoadedTimeout = setTimeout(() => {
      setImagesLoadingFinished()
    }, 700)

    return () => {
      clearTimeout(imagesLoadedTimeout)
    }
  }, [loadedImagesCount])

  const finishedLoading = () => {
    setLoadedImagesCount((count) => count + 1)
  }

  return (
    <div className="scene-wrapper">
      <div className="background" style={displacementBackground}>
        <img onLoad={finishedLoading} src={background} alt="" />
      </div>
      <div className="middleground" style={displacementMiddleground}>
        <img onLoad={finishedLoading} className="doggo" src={doggo} alt="" />
      </div>
      <div className="foreground" style={displacementForeground}>
        <img onLoad={finishedLoading} className="lamp" src={lamp} alt="" />
        <img onLoad={finishedLoading} className="plant" src={plant} alt="" />
      </div>
    </div>
  )
}
