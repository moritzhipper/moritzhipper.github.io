import { useState } from "react"
import lamp from "../assets/images/lamp.png"
import plant from "../assets/images/plant.png"
import "./Scene.css"

export const Scene = () => {
  const [loadedImagesCount, setLoadedImagesCount] = useState(0)
  const imagesCount = 2

  const finishedLoading = () => {
    setLoadedImagesCount((count) => count + 1)
  }

  if (loadedImagesCount === imagesCount) {
    console.log("finished loading")
  }

  return (
    <div className="scene-wrapper">
      <div className="center">
        <img
          onLoad={finishedLoading}
          className="scene lamp"
          src={lamp}
          alt=""
        />
        <img
          onLoad={finishedLoading}
          className="scene plant"
          src={plant}
          alt=""
        />
      </div>
    </div>
  )
}
