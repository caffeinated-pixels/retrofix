import styled from 'styled-components'
import { ContentSlide } from '../components'

const LayoutContainer = styled.div`
  padding: 70px 4vw 0;
`

const ResultsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-row-gap: 48px;
`

export default function SearchResultsLayout({ searchResults }) {
  const results = searchResults.map((show, i) => {
    return <ContentSlide key={`result-${i}`} item={show} />
  })

  return (
    <LayoutContainer>
      <ResultsGallery>{results}</ResultsGallery>
    </LayoutContainer>
  )
}
