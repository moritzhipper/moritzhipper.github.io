import { create } from "zustand"

const animationsEnabled = false

type InitiatorState = {
  didAnimateSceneEnterin: boolean
  didAnimateTypewriter: boolean
  updateIniatorState: (newState: Partial<InitiatorState>) => void
}

export const initiatorState = create<InitiatorState>((set) => ({
  didAnimateSceneEnterin: animationsEnabled,
  didAnimateTypewriter: animationsEnabled,
  updateIniatorState: (newState) => set((state) => ({ ...state, ...newState })),
}))
