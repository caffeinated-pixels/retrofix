import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BrowseContext } from '../context/BrowseContext'
import { MainContainer } from '../containers/'
import sortStreamingContent from '../helpers/sort-streaming-content'

const GenreContainersWrapper = styled.div`
  padding-top: 60px;
`

const GenreContainer = styled.div`
  padding-left: 20px;
`

const GenreTitle = styled.h2``

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

export default function StreamingContent() {
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
