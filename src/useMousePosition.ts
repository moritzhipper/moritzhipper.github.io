import { useEffect, useState } from "react"

export const useMousePosition = () => {
  const [distanceCenterNormalized, setDistanceCenterNormalized] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const distanceCenterX = ev.clientX - centerX
      const distanceCenterY = ev.clientY - centerY

      setDistanceCenterNormalized({
        x: (distanceCenterX / centerX) * -1,
        y: (distanceCenterY / centerY) * -1,
      })
    }
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return distanceCenterNormalized
}
