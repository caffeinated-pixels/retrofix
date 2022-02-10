import { useLayoutEffect, useState, createContext, useContext } from 'react'

const WindowWidthContext = createContext()

export function WindowWidthContextProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth)

  // useLayoutEffect runs before React renders the component making it a better choice for DOM measurement than useEffect, which runs after rendering/screen painting
  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)

    // updates state when screen width changes
    window.addEventListener('resize', updateWidth)

    // clean up event listener
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  )
}

export const useWindowWidthContext = () => useContext(WindowWidthContext)
