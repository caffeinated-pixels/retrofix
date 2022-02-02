import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { GET_THE_APP } from '../constants/routes'

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

export default function SearchResultsLayout({ searchResults }) {
  const navigate = useNavigate()

  const results = searchResults.map((show, i) => {
    const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/thumb.jpg`

    return (
      <Container key={`result-${i}`}>
        <ContentImage
          tabIndex='0'
          src={imgUrl}
          alt={show.title}
          onClick={() => navigate(GET_THE_APP, { state: show })}
        />
      </Container>
    )
  })

  return (
    <LayoutContainer>
      <ResultsGallery>{results}</ResultsGallery>
    </LayoutContainer>
  )
}
