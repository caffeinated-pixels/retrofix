import BrowseContextProvider from '../context/BrowseContext'
import useWindowWidth from '../hooks/useWindowWidth'
import { BrowseMobileLayout, BrowseDesktopLayout } from '../parts'

export default function Browse() {
  const width = useWindowWidth()

  return (
    <BrowseContextProvider>
      {width < 810 ? <BrowseMobileLayout /> : <BrowseDesktopLayout />}
    </BrowseContextProvider>
  )
}
