import { useReducer } from 'react'

const initialState = {
  currentPage: 0,
  pageLength: 0,
  activeSlides: [],
  trackOffset: '0px',
}

const setActiveSlides = (state) => {
  const firstSlide = state.currentPage * state.pageLength

  return Array.from(Array(state.pageLength)).map((item, i) => i + firstSlide)
}

const setTrackOffset = (state, slideWidth) => {
  const pageWidth = slideWidth * state.pageLength
  const trackOffset = pageWidth * state.currentPage

  return `-${trackOffset}px`
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
    case 'SET_PAGE_LENGTH':
      return { ...state, pageLength: action.payload }
    case 'SET_ACTIVE_SLIDES':
      return { ...state, activeSlides: setActiveSlides(state) }
    case 'SET_TRACK_OFFSET':
      return { ...state, trackOffset: setTrackOffset(state, action.payload) }
    case 'RESET_STATE':
      return { ...initialState }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function useSlideTracks() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}
