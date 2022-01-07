import { createContext, useState } from 'react'

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
  }

  return (
    <BrowseContext.Provider
      value={{ isMenuOpen, activeCategory, toggleMenu, setCategory }}
    >
      {children}
    </BrowseContext.Provider>
  )
}
