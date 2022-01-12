import { BrowsePageContainer } from '../containers'
import { BrowseHeaderDesktop, StreamingContentDesktop, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <BrowsePageContainer>
      <BrowseHeaderDesktop />
      <StreamingContentDesktop />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
