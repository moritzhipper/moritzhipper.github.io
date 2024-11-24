import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { initiatorState } from "../../initiator-state"
import "./WelcomePage.css"

const pageTextContent: string[] = [
  "Hello there!",
  "My name is Moritz and I love to code.",
  "I know about Angular, React, Express.js, Spring, PostgreSQL, modern AI APIs and the surrounding technologies. I’ve also got solid experience with Docker, Kubernetes and software architecture, making sure projects are built on a strong and scalable foundation.",
  "Check out some of my code",
  "Read more about me",
]

export const Welcome = () => {
  const [writtenText, setWrittenText] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const {
    typewriterAnimationFinished,
    imagesLoadingFinished,
    setTypewriterAnimationFinished,
  } = initiatorState()

  const textContent = useMemo(() => pageTextContent, [])
  const textLength = useMemo(() => textContent.join("").length, [])

  const animationFinishedClassName = typewriterAnimationFinished
    ? ""
    : "typewriter-is-animating"

  useEffect(() => {
    if (!imagesLoadingFinished) return

    if (typewriterAnimationFinished) {
      setWrittenText(textContent)
      return
    }

    if (index === textLength) {
      setTypewriterAnimationFinished()
      return
    }

    const timeout = setTimeout(() => {
      setWrittenText(getTextArrayUntilIndex(textContent, index))
      setIndex((prev) => prev + 1)
    }, getRandomIntervall(textContent, index))

    return () => {
      clearTimeout(timeout)
    }
  }, [index, typewriterAnimationFinished, writtenText, imagesLoadingFinished])

  return (
    <div
      className={"animate-fly-in " + animationFinishedClassName}
      onClick={setTypewriterAnimationFinished}
    >
      {writtenText[0] && <h1 className="big">{writtenText[0]}</h1>}
      {writtenText[1] && <p className="big">{writtenText[1]}</p>}
      {writtenText[2] && <p className="big mt-m">{writtenText[2]}</p>}
      {writtenText[3] && (
        <div className="flex-row mt-l">
          <Link className="big" to="/projects">
            {writtenText[3]}
          </Link>
          {writtenText[4] && (
            <Link className="big" to="/interests">
              {writtenText[4]}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

const getTextArrayUntilIndex = (
  textList: string[],
  index: number
): string[] => {
  let currentIndex = 0
  const result: string[] = []

  for (const text of textList) {
    if (currentIndex > index) break

    const remainingLength = index - currentIndex + 1

    if (remainingLength <= text.length) {
      result.push(text.slice(0, remainingLength - 1))
      break
    } else {
      result.push(text)
    }

    currentIndex += text.length
  }

  result[result.length - 1] += "█"

  return result
}

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

// emulate user pauses
const isLongIntervall = (): boolean => {
  return getRandomNumber(0, 100) > 99
}

// make it seem like im thinking aboout the next sentence
const isFirstLetterOfListItem = (
  textList: string[],
  index: number
): boolean => {
  let currentIndex = 0

  for (const text of textList) {
    if (currentIndex + 1 === index) {
      return true
    }
    currentIndex += text.length
  }

  return false
}

// make first typing of first line slower to build tension
const isFirstListItem = (textList: string[], index: number): boolean => {
  return textList[0].length >= index
}

// generate seemingly natural intervalls between keypresses
const getRandomIntervall = (textList: string[], index: number): number => {
  // Let user check out the scene first
  // Manually stretching time till page is rendered is bad seo, but art does has no limitiations
  if (index === 0) return 1500
  if (index === 1) return 1000

  if (isFirstListItem(textList, index)) {
    return getRandomNumber(100, 400)
  }
  // make it seem like im stopping to think
  if (isFirstLetterOfListItem(textList, index)) {
    return getRandomNumber(600, 700)
  }

  // make it seem like im looking for the key
  if (isLongIntervall()) {
    return getRandomNumber(300, 500)
  }

  // basic random intervalls between key presses
  return getRandomNumber(30, 40)
}
