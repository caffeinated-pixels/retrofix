import { useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../parts/'
import { SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader, MainContainer } from '../containers/'
import getContentByGenre from '../helpers/sort-genre-content'
import { footerHomeContent } from '../fixtures/footer-content'

const BrowseHeader = styled.div``

const BrowseNavbar = styled.nav`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0 20px;
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

const streamingContent = getContentByGenre()
console.log(streamingContent)

const genreContainers = streamingContent.map(({ genre, content }) => (
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

export default function Browse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log('toggled!')
    setIsMenuOpen((prevState) => !prevState)
  }

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
            <NavSliderPanel isMenuOpen={isMenuOpen} />
          </BrowseNavbar>
        </BrowseHeader>
      </SemanticHeader>

      <MainContainer opacity={isMenuOpen ? '0.5' : null}>
        {genreContainers}
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
