import { useState } from 'react'
import { browseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'

export default function SearchHeaderMobile({
  searchInput,
  handleSearchInput,
  handleSubmit,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <SemanticHeader>
      <browseHeader.Container>
        <browseHeader.Navbar>
          <browseHeader.BurgerButton
            aria-label='Main menu'
            onClick={toggleMenu}
          >
            <browseHeader.BurgerButtonIcon src='../images/icons/hamburger.gif' />
          </browseHeader.BurgerButton>

          <browseHeader.LogoWrapperMobile>
            <SiteLogo />
          </browseHeader.LogoWrapperMobile>

          <browseHeader.SearchForm onSubmit={handleSubmit}>
            <browseHeader.SearchInput
              autoFocus
              placeholder='Search'
              value={searchInput}
              onChange={handleSearchInput}
            />
          </browseHeader.SearchForm>
          <NavSliderPanel isMenuOpen={isMenuOpen} />
        </browseHeader.Navbar>
      </browseHeader.Container>
    </SemanticHeader>
  )
}
