import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import useWindowWidth from '../hooks/useWindowWidth'
import { BrowsePageContainer } from '../containers'
import {
  SearchHeaderDesktop,
  SearchHeaderMobile,
  SearchResultsLayout,
  Footer,
} from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'
import unsortedStreamingContent from '../fixtures/shows-and-films.json'

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('RoboCop')
  const [searchResults, setSearchResults] = useState([])
  const width = useWindowWidth()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    const fuse = new Fuse(unsortedStreamingContent, {
      keys: ['description', 'title', 'cast'],
    })

    const fuseResults = fuse.search(searchInput).map((result) => result.item)
    setSearchResults(fuseResults)
  }, [searchInput])

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
      <SearchResultsLayout searchResults={searchResults} />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
