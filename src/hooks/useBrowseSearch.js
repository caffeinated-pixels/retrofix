import { useNavigate } from 'react-router-dom'
import { SEARCH } from '../constants/routes'

export default function useBrowseSearch() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleSearchInput = (e) => {
    const searchInput = e.target.value.trim()

    if (searchInput.length > 0) navigate(`${SEARCH}?q=${searchInput}`)
  }

  return [handleSubmit, handleSearchInput]
}
