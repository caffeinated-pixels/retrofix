import styled from 'styled-components'
import { browseButtons } from '../components'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56.25vw;

  background-image: url('./images/misc/joker1.jpg');
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
export default function Billboard() {
  return (
    <Container>
      <Vignette>
        <FeaturedContainer>
          <FeaturedTitle>Joker</FeaturedTitle>
          <FeaturedSynopsis>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </FeaturedSynopsis>
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
        </FeaturedContainer>
      </Vignette>
    </Container>
  )
}
