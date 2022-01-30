import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BrowseContext } from '../context/BrowseContext'
import { MainContainer } from '../containers/'
import { SlideTrack } from '../components'

const GenreContainersWrapper = styled.div`
  position: relative;
  padding-top: 60px;
  margin-top: -17%;
`

const GenreContainer = styled.div`
  margin-bottom: 3vw;
`

const GenreTitle = styled.h2`
  font-size: 1.4vw;
  margin-left: 4%;
  margin-bottom: 0.5em;
`

export default function StreamingContentDesktop() {
  const { sortedContent } = useContext(BrowseContext)

  const genreContainers = useMemo(() => {
    return sortedContent.map(({ genre, content }) => (
      <GenreContainer key={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <SlideTrack content={content} />
      </GenreContainer>
    ))
  }, [sortedContent])
  // useMemo will only rerender the genreContainers when sortedContent changes

  return (
    <MainContainer>
      <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
    </MainContainer>
  )
}
