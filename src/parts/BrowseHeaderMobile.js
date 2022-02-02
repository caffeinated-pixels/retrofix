import { useContext, useState, useEffect } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import useBrowseSearch from '../hooks/useBrowseSearch'
import { browseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderMobile() {
  const { activeCategory, setCategory } = useContext(BrowseContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [handleSubmit, handleSearchInput] = useBrowseSearch()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => toggleMenu, [activeCategory])

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
              placeholder='Search'
              onChange={handleSearchInput}
            />
          </browseHeader.SearchForm>
          <NavSliderPanel
            isMenuOpen={isMenuOpen}
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        </browseHeader.Navbar>
      </browseHeader.Container>
    </SemanticHeader>
  )
}
