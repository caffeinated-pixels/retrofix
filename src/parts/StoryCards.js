import styled from 'styled-components'
import storyContentData from '../fixtures/storycard-content.json'

const StoryCardsContainer = styled.div``

const StoryCard = styled.section`
  width: 100%;
  /* max-width: 950px; */
  padding: 50px 5%;
  border-bottom: 8px solid #222;
`

const TextWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
`

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;
`

const StoryImage = styled.img`
  margin: 0 auto;
`

export default function StoryCards() {
  const storyContent = storyContentData.map((item) => (
    <StoryCard key={item.id}>
      <TextWrapper>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
      </TextWrapper>
      <StoryImage src={item.image} alt={item.alt} />
    </StoryCard>
  ))

  return <StoryCardsContainer>{storyContent}</StoryCardsContainer>
}

/* 
StoryCardsContainer (div)
    header-card (section)
    watch-on-tv (section)
    download (section)
    watch-everywhere (section)
    kids-profiles (section)
    faqs
*/
