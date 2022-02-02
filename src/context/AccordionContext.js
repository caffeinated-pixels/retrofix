import { createContext, useState, useContext } from 'react'

const AccordionContext = createContext()

export function AccordionContextProvider({ children }) {
  const [activeAccordionItem, setActiveAccordionItem] = useState(null)

  const setToggle = (currentAccordionItem) => {
    setActiveAccordionItem(() => {
      if (activeAccordionItem !== currentAccordionItem) {
        // set currentAccordionItem as activeAccordionItem
        return currentAccordionItem
      } else {
        // set null as activeAccordionItem
        return null
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ activeAccordionItem, setToggle }}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordionContext = () => useContext(AccordionContext)
