import { useContext } from 'react'
import { BrowseContext } from '../context/BrowseContext'
import { BrowseHeader, SiteLogo } from '../components'
import { SemanticHeader } from '../containers'

export default function BrowseHeaderDesktop() {
  const { isMenuOpen, activeCategory, setCategory } = useContext(BrowseContext)
  return (
    <SemanticHeader>
      <BrowseHeader>
        <BrowseHeader.Navbar padding='0 4%'>
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
                <BrowseHeader.SearchWrapper>
                  <BrowseHeader.SearchIcon />
                  <BrowseHeader.SearchInput desktop placeholder='Search' />
                </BrowseHeader.SearchWrapper>
              </BrowseHeader.SearchForm>
            </BrowseHeader.NavSecondaryItem>

            <BrowseHeader.NavSecondaryItem>
              <BrowseHeader.BellIcon />
            </BrowseHeader.NavSecondaryItem>

            <BrowseHeader.NavSecondaryItem>
              <BrowseHeader.Avatar src='./images/users/1.png' />
            </BrowseHeader.NavSecondaryItem>
          </BrowseHeader.NavSecondary>
        </BrowseHeader.Navbar>
      </BrowseHeader>
    </SemanticHeader>
  )
}
