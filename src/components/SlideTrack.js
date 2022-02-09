import { useState, useLayoutEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'
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
  const [firstSlide, setFirstSlide] = useState(0)
  const [pages, setPages] = useState({
    currentPage: 0,
    pageLength: 0,
    totalPages: 0,
    slides: [],
  })

  const [trackOffset, setTrackOffset] = useState('0px')

  const ref = useRef(null)
  const totalNumSlides = useMemo(() => content.length, [content])

  useLayoutEffect(() => {
    const slideWidth = ref.current.firstChild.getBoundingClientRect().width
    const slideTrackWidth = ref.current.getBoundingClientRect().width
    const pageLength = Math.floor(slideTrackWidth / slideWidth)
    const totalNumPages = Math.ceil(totalNumSlides / pageLength)

    setPages((prev) => {
      const firstSlide = prev.currentPage * pageLength

      const slides = Array.from(Array(pageLength)).map(
        (item, i) => i + firstSlide
      )

      return {
        currentPage: prev.currentPage,
        pageLength: pageLength,
        totalPages: totalNumPages,
        slides: slides,
      }
    })
  }, [totalNumSlides])

  useLayoutEffect(() => {
    const calcTrackOffset = () => {
      // get width of first slide

      const slideWidth = ref.current.firstChild.getBoundingClientRect().width

      const trackOffset = slideWidth * firstSlide
      setTrackOffset(`-${trackOffset}px`)
    }

    calcTrackOffset()

    // recalc offset everytime window resizes
    window.addEventListener('resize', calcTrackOffset)
    return () => window.removeEventListener('resize', calcTrackOffset)
  }, [firstSlide])

  const handleForward = () => {
    setFirstSlide((prev) => {
      const isLastSlide = prev === content.length - 1
      return isLastSlide ? prev : prev + 1
    })
  }
  const handleBack = () => {
    setFirstSlide((prev) => {
      const isFirstSlide = prev === 0
      return isFirstSlide ? prev : prev - 1
    })
  }

  return (
    <SlideTrackWrapper tabIndex='0'>
      <GoBackBox className='go-back' tabIndex='0' onClick={handleBack}>
        <ArrowIcon className='fas fa-angle-left' />
      </GoBackBox>
      <Track trackOffset={trackOffset} ref={ref}>
        {content.map((item, i) => (
          <ContentSlide
            key={item.title}
            item={item}
            isSlideOnCurrentPage={pages.slides.includes(i)}
          />
        ))}
      </Track>
      <GoForwardBox className='go-forward' tabIndex='0' onClick={handleForward}>
        <ArrowIcon className='fas fa-angle-right' />
      </GoForwardBox>
    </SlideTrackWrapper>
  )
}
