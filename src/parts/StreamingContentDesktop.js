import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { BrowseContext } from '../context/BrowseContext'
import { MainContainer } from '../containers/'
import { ContentBox } from '../components'
import sortStreamingContent from '../helpers/sort-streaming-content'

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

const SlideWrapper = styled.div`
  position: relative;

  border: 1px solid red;
`

const GoBackBox = styled.div`
  position: absolute;
  width: 4%;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(20, 20, 20, 0.5);
  /* background: red; */
`
const GoForwardBox = styled(GoBackBox)`
  right: 0;
  background: rgba(20, 20, 20, 0.7);
`

const ArrowIcon = styled.i`
  cursor: pointer;
  font-size: 3rem;
`

const GenreRow = styled.div`
  display: flex;
  /* padding-bottom: 40px; */
  padding-left: 4%;
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

        <SlideWrapper>
          <GoBackBox className='go-back'>
            <ArrowIcon className='fas fa-angle-left' />
          </GoBackBox>
          <GenreRow>
            {content.map((item) => (
              <ContentBox key={item.title} item={item} />
            ))}
          </GenreRow>
          <GoForwardBox className='go-forward'>
            <ArrowIcon className='fas fa-angle-right' />
          </GoForwardBox>
        </SlideWrapper>
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
