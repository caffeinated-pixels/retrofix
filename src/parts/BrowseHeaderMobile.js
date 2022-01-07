import { useContext } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import { BrowseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderMobile() {
  const { toggleMenu, isMenuOpen, activeCategory, setCategory } =
    useContext(BrowseContext)
  return (
    <SemanticHeader>
      <BrowseHeader>
        <BrowseHeader.Navbar>
          <BrowseHeader.BurgerButton
            aria-label='Main menu'
            onClick={toggleMenu}
          >
            <BrowseHeader.BurgerButtonIcon src='../images/icons/hamburger.gif' />
          </BrowseHeader.BurgerButton>

          <BrowseHeader.LogoWrapperMobile>
            <SiteLogo />
          </BrowseHeader.LogoWrapperMobile>

          <BrowseHeader.SearchForm>
            <BrowseHeader.SearchInput placeholder='Search' />
          </BrowseHeader.SearchForm>
          <NavSliderPanel
            isMenuOpen={isMenuOpen}
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        </BrowseHeader.Navbar>
      </BrowseHeader>
    </SemanticHeader>
  )
}
