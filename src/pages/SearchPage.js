import useWindowWidth from '../hooks/useWindowWidth'
import { BrowsePageContainer } from '../containers'
import {
  SearchHeaderDesktop,
  SearchHeaderMobile,
  SearchResultsLayout,
  Footer,
} from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function SearchPage() {
  const width = useWindowWidth()

  return (
    <BrowsePageContainer>
      {width < 768 ? <SearchHeaderMobile /> : <SearchHeaderDesktop />}
      <SearchResultsLayout />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
