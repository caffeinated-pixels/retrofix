import { BrowseHeaderMobile, StreamingContent, Footer } from '../parts/'

import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseMobileLayout() {
  return (
    <>
      <BrowseHeaderMobile />
      <StreamingContent />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
