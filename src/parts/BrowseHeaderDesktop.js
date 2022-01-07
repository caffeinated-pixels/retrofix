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

          <BrowseHeader.SearchForm>
            <BrowseHeader.SearchInput placeholder='Search' />
          </BrowseHeader.SearchForm>
        </BrowseHeader.Navbar>
      </BrowseHeader>
    </SemanticHeader>
  )
}
