import styled from 'styled-components'
import { RegNavbar, Footer } from '../parts/'
import { SiteLogo } from '../components'
import { SemanticHeader, MainContainer } from '../containers/'
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

const GenreContainer = styled.div``

const GenreTitle = styled.h2``

const GenreRow = styled.div``

export default function Browse() {
  return (
    <>
      <SemanticHeader>
        <BrowseHeader>
          <BrowseNavbar>
            <BurgerButton aria-label='Main menu'>
              <BurgerButtonIcon src='../images/icons/hamburger.gif' />
            </BurgerButton>

            <BrowseLogoWrapper>
              <SiteLogo />
            </BrowseLogoWrapper>

            <SearchForm>
              <SearchInput placeholder='Search' />
            </SearchForm>
          </BrowseNavbar>
        </BrowseHeader>
      </SemanticHeader>

      <MainContainer>
        <h1>Carousels go here</h1>
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
