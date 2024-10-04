import { useEffect, useState } from "react"
import room from "../assets/images/firstOutline.webp"
import lamp from "../assets/images/lamp.png"
import plant from "../assets/images/plant.png"
import { initiatorState } from "../initiator-state"
import "./Scene.css"

export const Scene = () => {
  const [loadedImagesCount, setLoadedImagesCount] = useState(0)
  const [animate, setAnimate] = useState("")
  const { updateIniatorState } = initiatorState()

  useEffect(() => {
    if (loadedImagesCount !== 3) return

    // short timeout to wait or image to be rendered, so it doesnt just 'pop in'
    const animationStartTimeout = setTimeout(() => {
      setAnimate("flyIn3d")
    }, 200)

    // wait for flyinanimation to be finished
    const animationEndTimeout = setTimeout(() => {
      updateIniatorState({ didAnimateSceneEnterin: true })
    }, 2300)

    return () => {
      clearTimeout(animationEndTimeout)
      clearTimeout(animationStartTimeout)
    }
  }, [loadedImagesCount])

  const finishedLoading = () => {
    setLoadedImagesCount((count) => count + 1)
  }

  return (
    <div className="scene-wrapper">
      <img
        onLoad={finishedLoading}
        className={"room " + animate}
        src={room}
        alt=""
      />
      <div className="center">
        <img
          onLoad={finishedLoading}
          className={"lamp " + animate}
          src={lamp}
          alt=""
        />
        <img
          onLoad={finishedLoading}
          className={"plant " + animate}
          src={plant}
          alt=""
        />
      </div>
    </div>
  )
}
