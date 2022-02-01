import { useState, useContext } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import { Billboard } from './'
import { browseHeader, SiteLogo, NavDropDown } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderDesktop() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { activeCategory, setCategory } = useContext(BrowseContext)

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState)
  }

  return (
    <SemanticHeader>
      <browseHeader.Container>
        <browseHeader.Navbar padding='0 4vw'>
          <browseHeader.LogoWrapperDesktop>
            <SiteLogo />
          </browseHeader.LogoWrapperDesktop>

          <browseHeader.NavPrimary>
            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn
                isActive={activeCategory === 'home'}
                onClick={() => setCategory('home')}
              >
                Home
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn
                isActive={activeCategory === 'films'}
                onClick={() => setCategory('films')}
              >
                Films
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn
                isActive={activeCategory === 'series'}
                onClick={() => setCategory('series')}
              >
                Series
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>
          </browseHeader.NavPrimary>

          <browseHeader.NavSecondary>
            <browseHeader.NavSecondaryItem>
              <browseHeader.SearchForm>
                <browseHeader.SearchWrapper isSearchOpen={isSearchOpen}>
                  <browseHeader.SearchIcon
                    className='fas fa-search'
                    onClick={toggleSearch}
                  />
                  <browseHeader.SearchInputDesktop
                    isSearchOpen={isSearchOpen}
                    placeholder='Search'
                  />
                </browseHeader.SearchWrapper>
              </browseHeader.SearchForm>
            </browseHeader.NavSecondaryItem>

            <browseHeader.NavSecondaryItem>
              <browseHeader.BellIcon className='fas fa-bell' />
            </browseHeader.NavSecondaryItem>

            <browseHeader.NavSecondaryItem>
              <NavDropDown />
            </browseHeader.NavSecondaryItem>
          </browseHeader.NavSecondary>
        </browseHeader.Navbar>
        <Billboard />
      </browseHeader.Container>
    </SemanticHeader>
  )
}
