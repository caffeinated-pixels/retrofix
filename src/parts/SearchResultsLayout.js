import styled from 'styled-components'
import unsortedStreamingContent from '../fixtures/shows-and-films.json'

const LayoutContainer = styled.div`
  padding: 70px 4vw 0;
`

const ResultsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-column-gap: 0.4vw;
  grid-row-gap: 48px;
`

const Container = styled.div`
  cursor: pointer;

  transition: all 250ms;
`
const ContentImage = styled.img`
  object-fit: cover;

  &:hover,
  &:focus-visible {
    transform: scale(0.98);
    filter: brightness(0.5);
  }

  &:focus-visible {
    outline: auto;
  }
`

const results = unsortedStreamingContent.map((show, i) => {
  const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/thumb.jpg`

  return (
    <Container key={`result-${i}`}>
      <ContentImage tabIndex='0' src={imgUrl} alt={show.title} />
    </Container>
  )
})

console.log(results)

export default function SearchResultsLayout() {
  return (
    <LayoutContainer>
      <ResultsGallery>{results}</ResultsGallery>
    </LayoutContainer>
  )
}
