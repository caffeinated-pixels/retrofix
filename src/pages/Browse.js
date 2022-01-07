import { useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
import { BrowseMobileLayout, BrowseDesktopLayout } from '../parts'

export default function Browse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('home')
  const width = useWindowWidth()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const setCategory = (category) => {
    setActiveCategory(category)
    toggleMenu()
  }

  return width < 810 ? (
    <BrowseMobileLayout
      toggleMenu={toggleMenu}
      isMenuOpen={isMenuOpen}
      activeCategory={activeCategory}
      setCategory={setCategory}
    />
  ) : (
    <BrowseDesktopLayout
      toggleMenu={toggleMenu}
      isMenuOpen={isMenuOpen}
      activeCategory={activeCategory}
      setCategory={setCategory}
    />
  )
}
