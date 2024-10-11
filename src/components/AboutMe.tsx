import { InfoPage } from "./InfoPage"

export const AboutMe = () => {
  return (
    <>
      <InfoPage header="About Me">
        <p className="big">
          I was born in Frankfurt, moved to Stuttgart to study Information
          Technology and have been building my career in Fintech for the past
          ten years. I'm good in coding, connecting with others and sharing my
          knowledge with students and colleagues. I really enjoy bringing my
          creativity into my work.
        </p>
        <p className="big mt-s">
          When I'm not coding, I'm probably in the nature somewhere looking at
          birds.
        </p>
        <a
          className="big mt-l"
          href="https://www.linkedin.com/in/moritz-hipper-226226323/"
        >
          Contact me via Linkedin
        </a>
      </InfoPage>
    </>
  )
}
