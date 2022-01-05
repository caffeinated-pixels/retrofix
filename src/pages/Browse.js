import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { Footer } from '../parts/'
import { SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader, MainContainer } from '../containers/'
import { footerHomeContent } from '../fixtures/footer-content'

import unsortedStreamingContent from '../fixtures/streaming-content.json'
import sortStreamingContent from '../helpers/sort-streaming-content'

const BrowseHeader = styled.div`
  position: relative;
`

const BrowseNavbar = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0 20px;
  background: black;
`
const BurgerButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin-right: 20px;
`

const BurgerButtonIcon = styled.img`
  width: 24px;
  width: 24px;
`

const BrowseLogoWrapper = styled.div`
  width: 84px;
  height: 24px;

  @media (min-width: 500px) {
    width: 167px;
    height: 45px;
  }
`

const SearchForm = styled.form`
  margin-left: auto;
`

const SearchInput = styled.input`
  box-sizing: content-box;
  width: 6em;
  padding: 4px 0.5em;
  border: 1px solid #ccc;

  color: #fff;
  background-color: transparent;
`

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
export default function Browse() {
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
      <SemanticHeader>
        <BrowseHeader>
          <BrowseNavbar>
            <BurgerButton aria-label='Main menu' onClick={toggleMenu}>
              <BurgerButtonIcon src='../images/icons/hamburger.gif' />
            </BurgerButton>

            <BrowseLogoWrapper>
              <SiteLogo />
            </BrowseLogoWrapper>

            <SearchForm>
              <SearchInput placeholder='Search' />
            </SearchForm>
            <NavSliderPanel
              isMenuOpen={isMenuOpen}
              activeCategory={activeCategory}
              setCategory={setCategory}
            />
          </BrowseNavbar>
        </BrowseHeader>
      </SemanticHeader>

      <MainContainer>
        <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}

/* 
header (build from scratch)
  modular navbar (build from scratch)
  billboard (on larger devices)
  my list carousel
/header

main
  genre carousel
    header
    ribbon
/main

footer


*/
