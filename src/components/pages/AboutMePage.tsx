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
            I grew up in Frankfurt am Main, later moving to Stuttgart to pursue
            a degree in Information Technology. Over the past decade, I’ve built
            a thriving career in Fintech, blending technical expertise with a
            passion for innovation. I excel at coding, fostering meaningful
            connections, and sharing my knowledge with both students and
            colleagues. Infusing creativity into my work is what drives me.
          </p>
          <p className="mt-s">
            When I’m not deep in code or exploring new ideas, you’ll likely find
            me outdoors, immersed in nature and birdwatching.
          </p>
          <p className="mt-m">
            Interested in starting a conversation or exploring my projects?
            Let’s connect!
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
