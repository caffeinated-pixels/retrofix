import { useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
import { BrowsePageContainer } from '../containers'
import {
  SearchHeaderDesktop,
  SearchHeaderMobile,
  SearchResultsLayout,
  Footer,
} from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('')
  const width = useWindowWidth()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <BrowsePageContainer>
      {width < 768 ? (
        <SearchHeaderMobile
          handleSubmit={handleSubmit}
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
      ) : (
        <SearchHeaderDesktop
          handleSubmit={handleSubmit}
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
      )}
      <SearchResultsLayout />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
