import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
import { BROWSE } from '../constants/routes'

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  const { search } = useLocation()
  const width = useWindowWidth()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)

    if (e.target.value.trim() === '') {
      // return to browse page if searchInput becomes empty
      navigate(BROWSE)
    } else {
      // sync URL param and searchInput
      navigate(`?q=${e.target.value}`)
    }
  }

  useEffect(() => {
    const searchParam = new URLSearchParams(search)
    // initialize searchInput with URL query paramater (set by Browse page)
    if (searchParam.get('q')) setSearchInput(searchParam.get('q'))
  }, [search])

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
