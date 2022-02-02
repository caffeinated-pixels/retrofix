import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowseContext } from '../context/BrowseContext'
import { browseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'
import { BROWSE } from '../constants/routes'

export default function SearchHeaderMobile({
  searchInput,
  handleSearchInput,
  handleSubmit,
}) {
  const { activeCategory, setCategory } = useContext(BrowseContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const handleCategory = (category) => {
    setCategory(category)
    navigate(BROWSE)
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
          <NavSliderPanel
            isMenuOpen={isMenuOpen}
            activeCategory={activeCategory}
            setCategory={handleCategory}
          />
        </browseHeader.Navbar>
      </browseHeader.Container>
    </SemanticHeader>
  )
}
