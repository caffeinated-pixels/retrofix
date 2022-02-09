import { useReducer } from 'react'

const setActiveSlides = (state) => {
  const firstSlide = state.currentPage * state.pageLength

  return Array.from(Array(state.pageLength)).map((item, i) => i + firstSlide)
}

const setTrackOffset = (state) => {
  const pageWidth = state.slideWidth * state.pageLength
  const trackOffset = pageWidth * state.currentPage

  return `-${trackOffset}px`
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SLIDE_WIDTH':
      return { ...state, slideWidth: action.payload }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
    case 'SET_PAGE_LENGTH':
      return { ...state, pageLength: action.payload }
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload }
    case 'SET_ACTIVE_SLIDES':
      return { ...state, activeSlides: setActiveSlides(state) }
    case 'SET_TRACK_OFFSET':
      return { ...state, trackOffset: setTrackOffset(state) }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function useSlideTracks(
  initialState = {
    slideWidth: 0,
    currentPage: 0,
    pageLength: 0,
    totalPages: 0,
    activeSlides: [],
    trackOffset: '0px',
  }
) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}
