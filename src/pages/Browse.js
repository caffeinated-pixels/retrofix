import useWindowWidth from '../hooks/useWindowWidth'
import { BrowseMobileLayout, BrowseDesktopLayout } from '../parts'

export default function Browse() {
  const width = useWindowWidth()

  console.log(`screen width: ${width}`)

  return width < 810 ? <BrowseMobileLayout /> : <BrowseDesktopLayout />
}
