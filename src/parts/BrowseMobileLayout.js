import { BrowseHeaderMobile, StreamingContentMobile, Footer } from './'
import { BrowsePageContainer } from '../containers'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseMobileLayout() {
  return (
    <BrowsePageContainer>
      <BrowseHeaderMobile />
      <StreamingContentMobile />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
