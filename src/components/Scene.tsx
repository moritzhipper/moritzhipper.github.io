import lamp from "../assets/images/lamp.png"
import plant from "../assets/images/plant.png"
import "./Scene.css"

export const Scene = () => {
  return (
    <div className="scene-wrapper">
      <div className="center">
        <img className="scene lamp" src={lamp} alt="" />
        <img className="scene plant" src={plant} alt="" />
      </div>
    </div>
  )
}
