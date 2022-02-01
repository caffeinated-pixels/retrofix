import useWindowWidth from '../hooks/useWindowWidth'
import { SearchMobileLayout, SearchDesktopLayout } from '../parts'

export default function SearchPage() {
  const width = useWindowWidth()

  return <>{width < 768 ? <SearchMobileLayout /> : <SearchDesktopLayout />}</>
}
