import me from "../../assets/images/me.webp"
import meHiking from "../../assets/images/me_hiking.webp"
import "./AboutMePage.css"
import { InfoPageWrapper } from "./InfoPageWrapper"

export const AboutMePage = () => {
  return (
    <InfoPageWrapper header="About Me" className="about-me-page">
      <div className="content">
        <div className="images">
          <img
            className="me"
            src={me}
            alt="this is me looking into the camera like a responsible, competent developer does"
          />
          <img
            className="hiking"
            src={meHiking}
            alt="this is me looking at a lake while hiking"
          />
        </div>
        <div className="text">
          <p>
            I grew up in Frankfurt am Main, moved to Stuttgart to study
            Information Technology and have been building my career in Fintech
            for the past ten years. I'm good in coding, connecting with others
            and sharing my knowledge with students and colleagues. I really
            enjoy bringing my creativity into my work.
          </p>
          <p className="mt-s">
            When I'm not coding, trying out new and interesitng things, I'm
            probably in nature somewhere looking at birds.
          </p>
          <a
            className="big mt-l"
            href="https://www.linkedin.com/in/moritz-hipper-226226323/"
          >
            Contact me via Linkedin
          </a>
        </div>
      </div>
    </InfoPageWrapper>
  )
}
