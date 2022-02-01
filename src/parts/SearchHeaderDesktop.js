import { BrowseHeader, SiteLogo, NavDropDown } from '../components'
import { SemanticHeader } from '../containers'

export default function SearchHeaderDesktop() {
  return (
    <SemanticHeader>
      <BrowseHeader>
        <BrowseHeader.Navbar padding='0 4vw'>
          <BrowseHeader.LogoWrapperDesktop>
            <SiteLogo />
          </BrowseHeader.LogoWrapperDesktop>

          <BrowseHeader.NavPrimary>
            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn>Home</BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>

            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn>Films</BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>

            <BrowseHeader.NavPrimaryItem>
              <BrowseHeader.NavPrimaryBtn>Series</BrowseHeader.NavPrimaryBtn>
            </BrowseHeader.NavPrimaryItem>
          </BrowseHeader.NavPrimary>

          <BrowseHeader.NavSecondary>
            <BrowseHeader.NavSecondaryItem>
              <BrowseHeader.SearchForm>
                <BrowseHeader.SearchWrapper isSearchOpen={true}>
                  <BrowseHeader.SearchIcon />
                  <BrowseHeader.SearchInputDesktop
                    isSearchOpen={true}
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
      </BrowseHeader>
    </SemanticHeader>
  )
}
