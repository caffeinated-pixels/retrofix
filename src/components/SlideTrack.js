import { useState, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { ContentBox } from '../components'

const SlideTrackWrapper = styled.div`
  position: relative;
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

const GenreRow = styled.div`
  display: flex;
  padding-left: 4%;
  transform: translateX(${({ trackOffset }) => trackOffset});
  transition: transform 750ms ease;
`

/* 
- initial track position is 0px
- offset value = width of slide
- move track (forward/back) by offset value on btn click
- need to get slideWidth and calculate offset value on first render
- recalculate offset value everytime window resizes
*/

export default function SlideTrack({ content }) {
  const [firstSlide, setFirstSlide] = useState(0)
  const [trackOffset, setTrackOffset] = useState('0px')

  const ref = useRef(null)

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
    <SlideTrackWrapper>
      <GoBackBox className='go-back' onClick={handleBack}>
        <ArrowIcon className='fas fa-angle-left' />
      </GoBackBox>
      <GenreRow trackOffset={trackOffset} ref={ref}>
        {content.map((item) => (
          <ContentBox key={item.title} item={item} />
        ))}
      </GenreRow>
      <GoForwardBox className='go-forward' onClick={handleForward}>
        <ArrowIcon className='fas fa-angle-right' />
      </GoForwardBox>
    </SlideTrackWrapper>
  )
}
