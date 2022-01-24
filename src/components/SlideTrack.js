import { useState } from 'react'
import styled from 'styled-components'
import { ContentBox } from '../components'

const SlideWrapper = styled.div`
  position: relative;
`

const GoBackBox = styled.div`
  position: absolute;
  width: 4%;
  top: 0;
  bottom: 0;

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
`

export default function SlideTrack({ content }) {
  const [trackOffset, setTrackOffset] = useState('0px')

  return (
    <SlideWrapper>
      <GoBackBox className='go-back'>
        <ArrowIcon className='fas fa-angle-left' />
      </GoBackBox>
      <GenreRow offset={trackOffset}>
        {content.map((item) => (
          <ContentBox key={item.title} item={item} />
        ))}
      </GenreRow>
      <GoForwardBox className='go-forward'>
        <ArrowIcon className='fas fa-angle-right' />
      </GoForwardBox>
    </SlideWrapper>
  )
}
