import styled from 'styled-components'
import { SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers/'

const Container = styled.div`
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

export default function BrowseHeader({
  toggleMenu,
  isMenuOpen,
  activeCategory,
  setCategory,
}) {
  return (
    <SemanticHeader>
      <Container>
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
      </Container>
    </SemanticHeader>
  )
}
