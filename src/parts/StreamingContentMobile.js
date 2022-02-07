import { useMemo } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useBrowseContext } from '../context/BrowseContext'
import { MainContainer } from '../containers/'
import { GET_THE_APP } from '../constants/routes'

const GenreContainersWrapper = styled.div`
  padding-top: 60px;
`

const GenreContainer = styled.div`
  padding-left: 20px;
`

const GenreTitle = styled.h2`
  color: #999;
  font-size: 1.2rem;
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

export default function StreamingContentMobile() {
  const { sortedContent } = useBrowseContext()
  const navigate = useNavigate()

  const genreContainers = useMemo(() => {
    return sortedContent.map(({ genre, content }) => (
      <GenreContainer key={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <GenreRow>
          {content.map((item) => (
            <ContentBox
              key={item.title}
              onClick={() => navigate(`${GET_THE_APP}/${item.id}`)}
            >
              <ContentImage
                src={`/images/${item.category}/${item.genre}/${item.slug}/thumb.jpg`}
                alt={item.title}
              />
            </ContentBox>
          ))}
        </GenreRow>
      </GenreContainer>
    ))
  }, [sortedContent, navigate])
  // useMemo will only rerender the genreContainers when sortedContent changes

  return (
    <MainContainer>
      <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
    </MainContainer>
  )
}
