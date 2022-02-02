import { browseHeader, SiteLogo, NavDropDown } from '../components'
import { useNavigate } from 'react-router-dom'
import { useBrowseContext } from '../context/BrowseContext'
import { SemanticHeader } from '../containers'
import { BROWSE } from '../constants/routes'

export default function SearchHeaderDesktop({
  searchInput,
  handleSearchInput,
  handleSubmit,
}) {
  const { activeCategory, setCategory } = useBrowseContext()
  const navigate = useNavigate()

  const handleChangeCategory = (category) => {
    setCategory(category)
    navigate(BROWSE)
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
                onClick={() => handleChangeCategory('home')}
              >
                Home
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn
                isActive={activeCategory === 'films'}
                onClick={() => handleChangeCategory('films')}
              >
                Films
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn
                isActive={activeCategory === 'series'}
                onClick={() => handleChangeCategory('series')}
              >
                Series
              </browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>
          </browseHeader.NavPrimary>

          <browseHeader.NavSecondary>
            <browseHeader.NavSecondaryItem>
              <browseHeader.SearchForm onSubmit={handleSubmit}>
                <browseHeader.SearchWrapper isSearchOpen={true}>
                  <browseHeader.SearchIcon className='fas fa-search' />
                  <browseHeader.SearchInputDesktop
                    autoFocus
                    isSearchOpen={true}
                    placeholder='Search'
                    value={searchInput}
                    onChange={handleSearchInput}
                  />
                  <browseHeader.CloseSearchButton
                    aria-label='close search'
                    onClick={() => navigate(BROWSE)}
                  >
                    <browseHeader.CloseIcon className='fas fa-times' />
                  </browseHeader.CloseSearchButton>
                </browseHeader.SearchWrapper>
              </browseHeader.SearchForm>
            </browseHeader.NavSecondaryItem>

            <browseHeader.NavSecondaryItem>
              <browseHeader.BellIcon />
            </browseHeader.NavSecondaryItem>

            <browseHeader.NavSecondaryItem>
              <NavDropDown />
            </browseHeader.NavSecondaryItem>
          </browseHeader.NavSecondary>
        </browseHeader.Navbar>
      </browseHeader.Container>
    </SemanticHeader>
  )
}
