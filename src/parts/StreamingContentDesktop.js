import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BrowseContext } from '../context/BrowseContext'
import { MainContainer } from '../containers/'
import sortStreamingContent from '../helpers/sort-streaming-content'

const GenreContainersWrapper = styled.div`
  position: relative;
  padding-top: 60px;
  margin-top: -17%;
`

const GenreContainer = styled.div`
  padding-left: 4%;
`

const GenreTitle = styled.h2`
  font-size: 1.4vw;
  margin-bottom: 0.5em;
`

const GenreRow = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 40px;
`

const ContentBox = styled.div`
  min-width: 160px;
  margin-right: 2px;
  cursor: pointer;
`
const ContentImage = styled.img`
  height: 90px;
  object-fit: cover;
`

export default function StreamingContentDesktop() {
  const { activeCategory, unsortedStreamingContent } = useContext(BrowseContext)

  const genreContainers = useMemo(() => {
    const sortedStreamingContent = sortStreamingContent(
      unsortedStreamingContent,
      activeCategory
    )

    return sortedStreamingContent.map(({ genre, content }) => (
      <GenreContainer key={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <GenreRow>
          {content.map((item) => (
            <ContentBox key={item.title}>
              <ContentImage
                src={`/images/${item.category}/${item.genre}/${item.slug}/small.jpg`}
                alt={item.title}
              />
            </ContentBox>
          ))}
        </GenreRow>
      </GenreContainer>
    ))
  }, [activeCategory, unsortedStreamingContent])
  // useMemo will only rerender the genreContainers when activeCategory changes

  return (
    <MainContainer>
      <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
    </MainContainer>
  )
}
