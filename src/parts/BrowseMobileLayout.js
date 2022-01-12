import { BrowseHeaderMobile, StreamingContentMobile, Footer } from '../parts/'

import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseMobileLayout() {
  return (
    <>
      <BrowseHeaderMobile />
      <StreamingContentMobile />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
