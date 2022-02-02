import useWindowWidth from '../hooks/useWindowWidth'
import { BrowseMobileLayout, BrowseDesktopLayout } from '../parts'

export default function Browse() {
  const width = useWindowWidth()

  return <>{width < 768 ? <BrowseMobileLayout /> : <BrowseDesktopLayout />}</>
}
