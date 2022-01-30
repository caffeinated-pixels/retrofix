import { createContext, useState } from 'react'
import unsortedStreamingContent from '../fixtures/shows-and-films.json'

export const BrowseContext = createContext()

export default function BrowseContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('home')

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
        unsortedStreamingContent,
      }}
    >
      {children}
    </BrowseContext.Provider>
  )
}
