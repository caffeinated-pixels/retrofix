import { BrowsePageContainer } from '../containers'
import { SearchHeaderDesktop, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function SearchDesktopLayout() {
  return (
    <BrowsePageContainer>
      <SearchHeaderDesktop />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
