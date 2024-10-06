import { create } from "zustand"

const animationsDisabled = false

type InitiatorState = {
  imagesLoadingFinished: boolean
  typewriterAnimationFinished: boolean
  setImagesLoadingFinished: () => void
  setTypewriterAnimationFinished: () => void
  updateIniatorState: (newState: Partial<InitiatorState>) => void
}

export const initiatorState = create<InitiatorState>((set) => ({
  imagesLoadingFinished: animationsDisabled,
  typewriterAnimationFinished: animationsDisabled,
  setImagesLoadingFinished: () =>
    set((state) => {
      document.body.classList.add("loaded")
      return { ...state, imagesLoadingFinished: true }
    }),
  setTypewriterAnimationFinished: () =>
    set((state) => ({ ...state, typewriterAnimationFinished: true })),
  updateIniatorState: (newState) => set((state) => ({ ...state, ...newState })),
}))
