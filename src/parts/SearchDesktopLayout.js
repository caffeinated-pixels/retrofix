import { BrowsePageContainer } from '../containers'
import { SearchHeaderDesktop, SearchResultsLayout, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function SearchDesktopLayout() {
  return (
    <BrowsePageContainer>
      <SearchHeaderDesktop />
      <SearchResultsLayout />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
