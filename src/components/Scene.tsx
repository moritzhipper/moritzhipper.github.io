import { useState } from "react"
import room from "../assets/images/firstOutline.png"
import lamp from "../assets/images/lamp.png"
import plant from "../assets/images/plant.png"
import "./Scene.css"

export const Scene = () => {
  const [loadedImagesCount, setLoadedImagesCount] = useState(0)
  const imagesCount = 3

  const finishedLoading = () => {
    setLoadedImagesCount((count) => count + 1)
  }

  if (loadedImagesCount === imagesCount) {
    console.log("finished loading images")
  }

  return (
    <div className="scene-wrapper">
      <img
        onLoad={finishedLoading}
        className="room flyIn3d"
        src={room}
        alt=""
      />
      <div className="center">
        <img
          onLoad={finishedLoading}
          className="lamp flyIn3d"
          src={lamp}
          alt=""
        />
        <img
          onLoad={finishedLoading}
          className="plant flyIn3d"
          src={plant}
          alt=""
        />
      </div>
    </div>
  )
}
