import { createContext, useState, useEffect } from 'react'
import sortStreamingContent from '../helpers/sort-streaming-content'
import unsortedStreamingContent from '../fixtures/shows-and-films.json'

export const BrowseContext = createContext()

export default function BrowseContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('home')
  const [sortedContent, setSortedContent] = useState([])
  const [randomShow, setRandomShow] = useState({})

  useEffect(() => {
    const sortedStreamingContent = sortStreamingContent(
      unsortedStreamingContent,
      activeCategory
    )

    setSortedContent(sortedStreamingContent)
  }, [activeCategory])

  useEffect(() => {
    if (sortedContent.length > 0) {
      const randomGenreIndex = Math.floor(Math.random() * sortedContent.length)
      const randomGenreArr = sortedContent[randomGenreIndex].content
      const randomShowIndex = Math.floor(Math.random() * randomGenreArr.length)
      const randomShow = randomGenreArr[randomShowIndex]
      setRandomShow(randomShow)
    }
  }, [sortedContent])

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
        randomShow,
      }}
    >
      {children}
    </BrowseContext.Provider>
  )
}
