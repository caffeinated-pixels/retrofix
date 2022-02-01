import { useState } from 'react'
import { BrowseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'

export default function SearchHeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

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
          <NavSliderPanel isMenuOpen={isMenuOpen} />
        </BrowseHeader.Navbar>
      </BrowseHeader>
    </SemanticHeader>
  )
}
