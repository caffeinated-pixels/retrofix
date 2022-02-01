import { browseHeader, SiteLogo, NavDropDown } from '../components'
import { SemanticHeader } from '../containers'

export default function SearchHeaderDesktop({
  searchInput,
  handleSearchInput,
  handleSubmit,
}) {
  return (
    <SemanticHeader>
      <browseHeader.Container>
        <browseHeader.Navbar padding='0 4vw'>
          <browseHeader.LogoWrapperDesktop>
            <SiteLogo />
          </browseHeader.LogoWrapperDesktop>

          <browseHeader.NavPrimary>
            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn>Home</browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn>Films</browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>

            <browseHeader.NavPrimaryItem>
              <browseHeader.NavPrimaryBtn>Series</browseHeader.NavPrimaryBtn>
            </browseHeader.NavPrimaryItem>
          </browseHeader.NavPrimary>

          <browseHeader.NavSecondary>
            <browseHeader.NavSecondaryItem>
              <browseHeader.SearchForm onSubmit={handleSubmit}>
                <browseHeader.SearchWrapper isSearchOpen={true}>
                  <browseHeader.SearchIcon />
                  <browseHeader.SearchInputDesktop
                    isSearchOpen={true}
                    placeholder='Search'
                    value={searchInput}
                    onChange={handleSearchInput}
                  />
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
