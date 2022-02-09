import { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import useSlideTracks from '../hooks/useSlideTracks'
import { ContentSlide } from '../components'

const SlideTrackWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const GoBackBox = styled.div`
  position: absolute;
  width: 4%;
  top: 0;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: rgba(20, 20, 20, 0.5);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover {
    background: rgba(20, 20, 20, 0.7);
  }
`
const GoForwardBox = styled(GoBackBox)`
  right: 0;
`

const ArrowIcon = styled.i`
  font-size: 3rem;
`

const Track = styled.div`
  display: flex;
  padding-left: 4%;
  transform: translateX(${({ trackOffset }) => trackOffset});
  transition: transform 750ms ease;
`

export default function SlideTrack({ content }) {
  const [state, dispatch] = useSlideTracks()

  const ref = useRef(null)

  useLayoutEffect(() => {
    // clear state when content updates
    dispatch({ type: 'RESET_STATE' })

    // then setup state values based on current content & slideWidth
    const slideWidth = ref.current.firstChild.getBoundingClientRect().width
    const slideTrackWidth = ref.current.getBoundingClientRect().width
    const pageLength = Math.floor(slideTrackWidth / slideWidth)

    dispatch({ type: 'SET_PAGE_LENGTH', payload: pageLength })
    dispatch({ type: 'SET_ACTIVE_SLIDES' })
  }, [dispatch])

  useLayoutEffect(() => {
    // update trackOffset value when window resizes
    const slideWidth = ref.current.firstChild.getBoundingClientRect().width
    dispatch({ type: 'SET_TRACK_OFFSET', payload: slideWidth })
  }, [state.currentPage, dispatch])

  useEffect(() => {
    const setTrackOffset = () => {
      // get width of first slide
      const slideWidth = ref.current.firstChild.getBoundingClientRect().width
      dispatch({ type: 'SET_TRACK_OFFSET', payload: slideWidth })
    }

    // recalc offset everytime window resizes
    window.addEventListener('resize', setTrackOffset)
    return () => window.removeEventListener('resize', setTrackOffset)
  }, [dispatch])

  const handleForward = () => {
    const totalNumPages = Math.ceil(content.length / state.pageLength)
    const isLastPage = totalNumPages - 1 === state.currentPage

    if (isLastPage) return

    dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage + 1 })
    dispatch({ type: 'SET_ACTIVE_SLIDES' })
  }
  const handleBack = () => {
    const isFirstPage = state.currentPage === 0
    if (isFirstPage) return

    dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage - 1 })
    dispatch({ type: 'SET_ACTIVE_SLIDES' })
  }

  return (
    <SlideTrackWrapper tabIndex='0'>
      <GoBackBox className='go-back' tabIndex='0' onClick={handleBack}>
        <ArrowIcon className='fas fa-angle-left' />
      </GoBackBox>
      <Track trackOffset={state.trackOffset} ref={ref}>
        {content.map((item, i) => (
          <ContentSlide
            key={item.title}
            item={item}
            isSlideOnCurrentPage={state.activeSlides.includes(i)}
          />
        ))}
      </Track>
      <GoForwardBox className='go-forward' tabIndex='0' onClick={handleForward}>
        <ArrowIcon className='fas fa-angle-right' />
      </GoForwardBox>
    </SlideTrackWrapper>
  )
}
