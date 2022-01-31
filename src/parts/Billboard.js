import { useContext } from 'react'
import styled from 'styled-components'
import { BrowseContext } from '../context/BrowseContext'
import { browseButtons } from '../components'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56.25vw;

  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;

  display: flex;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 14.74vw;
    bottom: 0;

    background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 0,
      rgba(20, 20, 20, 0.15) 15%,
      rgba(20, 20, 20, 0.35) 29%,
      rgba(20, 20, 20, 0.58) 44%,
      #141414 68%,
      #141414 100%
    );
  }
`

const Vignette = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-right: 26.09%;

  background: linear-gradient(
    77deg,
    rgba(0, 0, 0, 0.6) 0,
    rgba(0, 0, 0, 0) 85%
  );
`

const FeaturedContainer = styled.div`
  width: calc(100vw * 0.36); // 36% of viewport width
  margin-left: calc(100vw * 0.04);
`

const FeaturedTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
`

const FeaturedSynopsis = styled.p`
  font-size: max(0.8rem, 1.4vw);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  line-height: 1.25;
`

const ButtonWrapper = styled.div`
  margin-top: 1.5vw;
`

const MaturityRating = styled.div`
  position: absolute;
  right: 0;
  background-color: rgba(51, 51, 51, 0.6);
  padding: 0.5vw 3.5vw 0.5vw 0.8vw;
  border-left: solid 3px #dcdcdc;
  font-size: 1.1vw;
`

export default function Billboard() {
  const { randomShow } = useContext(BrowseContext)
  const imgUrl = randomShow.slug
    ? `/images/${randomShow.category}/${randomShow.genre}/${randomShow.slug}/large.jpg`
    : null

  return (
    <Container className='container' imgUrl={imgUrl}>
      <Vignette>
        <FeaturedContainer>
          <FeaturedTitle>{randomShow.title}</FeaturedTitle>
          <FeaturedSynopsis>{randomShow.description}</FeaturedSynopsis>
          <ButtonWrapper>
            <browseButtons.PlayButton>
              <browseButtons.PlayIcon className='fas fa-play' />
              Play
            </browseButtons.PlayButton>
            <browseButtons.MoreInfoButton>
              <browseButtons.InfoIcon className='fas fa-info-circle' />
              More Info
            </browseButtons.MoreInfoButton>
          </ButtonWrapper>
          <MaturityRating>TV-{randomShow.maturity}</MaturityRating>
        </FeaturedContainer>
      </Vignette>
    </Container>
  )
}
