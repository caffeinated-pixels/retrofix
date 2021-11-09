import styled from 'styled-components'
import storyContentData from '../fixtures/storycard-content.json'

const StoryCardsContainer = styled.div``

const StoryCard = styled.section`
  width: 100%;
  /* max-width: 950px; */
  padding: 50px 5%;
  border-bottom: 8px solid #222;

  @media (min-width: 550px) {
    padding: 70px 45px;
  }

  @media (min-width: 950px) {
    display: flex;
    flex-direction: ${(props) => props.direction};
  }
`

const TextWrapper = styled.div`
  text-align: center;
  padding: 15px 0;

  @media (min-width: 950px) {
    width: 52%;
  }
`

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;

  @media (min-width: 550px) {
    font-size: 1.25rem;
  }
`
// some images need a negative margin-top to reduce white space
const StoryImage = styled.img`
  margin: ${({ useNegativeMargin }) =>
    useNegativeMargin ? '-10% auto 0' : '0 auto'};
  position: relative;
  z-index: -1;

  @media (min-width: 950px) {
    width: 48%;
  }
`

export default function StoryCards() {
  const storyContent = storyContentData.map((item) => (
    <StoryCard key={item.id} direction={item.direction}>
      <TextWrapper>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
      </TextWrapper>
      <StoryImage
        src={item.image}
        alt={item.alt}
        useNegativeMargin={item.useNegativeMargin}
      />
    </StoryCard>
  ))

  return <StoryCardsContainer>{storyContent}</StoryCardsContainer>
}
