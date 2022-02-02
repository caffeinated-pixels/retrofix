import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useBrowseContext } from '../context/BrowseContext'
import useBrowseSearch from '../hooks/useBrowseSearch'
import { Billboard } from './'
import { browseHeader, SiteLogo, NavDropDown } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderDesktop() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { activeCategory, setCategory } = useBrowseContext()
  const [handleSubmit, handleSearchInput] = useBrowseSearch()
  const { state: prevURL } = useLocation()
  const ref = useRef(null)

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState)
  }

  useEffect(() => {
    // display search input if returning from SearchPage
    if (prevURL === 'search') setIsSearchOpen(true)
  }, [prevURL])

  useEffect(() => {
    if (isSearchOpen) {
      ref.current.focus()
    }
  }, [isSearchOpen])

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
              <browseHeader.SearchForm onSubmit={handleSubmit}>
                <browseHeader.SearchWrapper isSearchOpen={isSearchOpen}>
                  <browseHeader.IconButton
                    onClick={toggleSearch}
                    aria-label='open search box'
                  >
                    <browseHeader.SearchIcon className='fas fa-search' />
                  </browseHeader.IconButton>

                  <browseHeader.SearchInputDesktop
                    ref={ref}
                    isSearchOpen={isSearchOpen}
                    placeholder='Search'
                    onChange={handleSearchInput}
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
