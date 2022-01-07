import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { BrowseHeader, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { footerHomeContent } from '../fixtures/footer-content'

import unsortedStreamingContent from '../fixtures/streaming-content.json'
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
export default function BrowseMobileLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const setCategory = (category) => {
    setActiveCategory(category)
    toggleMenu()
  }

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
  }, [activeCategory])
  // useMemo will only rerender the genreContainers when activeCategory changes

  return (
    <>
      <BrowseHeader
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        activeCategory={activeCategory}
        setCategory={setCategory}
      />

      <MainContainer>
        <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
