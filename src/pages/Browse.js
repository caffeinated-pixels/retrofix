import { useWindowWidthContext } from '../context/WindowWidthContext'
import { BrowseMobileLayout, BrowseDesktopLayout } from '../parts'

export default function Browse() {
  const width = useWindowWidthContext()

  return <>{width < 768 ? <BrowseMobileLayout /> : <BrowseDesktopLayout />}</>
}
