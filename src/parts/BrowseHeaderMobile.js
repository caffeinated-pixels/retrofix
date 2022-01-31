import { useContext, useState, useEffect } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import { BrowseHeader, SiteLogo, NavSliderPanel } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderMobile() {
  const { activeCategory, setCategory } = useContext(BrowseContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => toggleMenu, [activeCategory])

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
