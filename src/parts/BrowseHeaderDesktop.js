import { useState, useContext } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import { Billboard } from './'
import { BrowseHeader, SiteLogo, NavDropDown } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderDesktop() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { activeCategory, setCategory } = useContext(BrowseContext)

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState)
  }

  return (
    <SemanticHeader>
      <BrowseHeader>
        <BrowseHeader.Navbar padding='0 4vw'>
          <BrowseHeader.LogoWrapperDesktop>
            <SiteLogo />
          </BrowseHeader.LogoWrapperDesktop>

          <BrowseHeader.NavPrimary>
            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn
                isActive={activeCategory === 'home'}
                onClick={() => setCategory('home')}
              >
                Home
              </BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>

            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn
                isActive={activeCategory === 'films'}
                onClick={() => setCategory('films')}
              >
                Films
              </BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>

            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn
                isActive={activeCategory === 'series'}
                onClick={() => setCategory('series')}
              >
                Series
              </BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>
          </BrowseHeader.NavPrimary>

          <BrowseHeader.NavSecondary>
            <BrowseHeader.NavSecondaryItem>
              <BrowseHeader.SearchForm>
                <BrowseHeader.SearchWrapper isSearchOpen={isSearchOpen}>
                  <BrowseHeader.SearchIcon onClick={toggleSearch} />
                  <BrowseHeader.SearchInputDesktop
                    isSearchOpen={isSearchOpen}
                    placeholder='Search'
                  />
                </BrowseHeader.SearchWrapper>
              </BrowseHeader.SearchForm>
            </BrowseHeader.NavSecondaryItem>

            <BrowseHeader.NavSecondaryItem>
              <BrowseHeader.BellIcon />
            </BrowseHeader.NavSecondaryItem>

            <BrowseHeader.NavSecondaryItem>
              <NavDropDown />
            </BrowseHeader.NavSecondaryItem>
          </BrowseHeader.NavSecondary>
        </BrowseHeader.Navbar>
        <Billboard />
      </BrowseHeader>
    </SemanticHeader>
  )
}
