import { useEffect, useState } from "react"
import background from "../assets/images/background.png"
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
  const displacementMiddle = {
    transform: `translate(${acceleration.x * 30}px, ${acceleration.y * 6}px)`,
  }

  useEffect(() => {
    if (loadedImagesCount !== 3) return

    // short timeout to wait for image to be rendered, so it doesnt just 'pop in'
    const imagesLoadedTimeout = setTimeout(() => {
      setImagesLoadingFinished()
    }, 400)

    return () => {
      clearTimeout(imagesLoadedTimeout)
    }
  }, [loadedImagesCount])

  const finishedLoading = () => {
    setLoadedImagesCount((count) => count + 1)
  }

  return (
    <div className="scene-wrapper">
      <img
        onLoad={finishedLoading}
        className={"background"}
        src={background}
        style={displacementBackground}
        alt=""
      />
      <div className={"middleground"} style={displacementMiddle}>
        <img onLoad={finishedLoading} className="lamp" src={lamp} alt="" />
        <img onLoad={finishedLoading} className="plant" src={plant} alt="" />
      </div>
    </div>
  )
}
