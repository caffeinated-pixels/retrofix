import { createContext, useState, useEffect } from 'react'
import sortStreamingContent from '../helpers/sort-streaming-content'
import unsortedStreamingContent from '../fixtures/shows-and-films.json'

export const BrowseContext = createContext()

export default function BrowseContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('home')
  const [sortedContent, setSortedContent] = useState([])

  useEffect(() => {
    const sortedStreamingContent = sortStreamingContent(
      unsortedStreamingContent,
      activeCategory
    )

    setSortedContent(sortedStreamingContent)
  }, [activeCategory])

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const setCategory = (category) => {
    setActiveCategory(category)
    toggleMenu()
    // TODO: only call toggleMenu for mobile layout
  }

  return (
    <BrowseContext.Provider
      value={{
        isMenuOpen,
        activeCategory,
        toggleMenu,
        setCategory,
        sortedContent,
      }}
    >
      {children}
    </BrowseContext.Provider>
  )
}
