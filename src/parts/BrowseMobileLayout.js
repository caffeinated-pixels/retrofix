import { BrowseHeader, StreamingContent, Footer } from '../parts/'

import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseMobileLayout() {
  return (
    <>
      <BrowseHeader />
      <StreamingContent />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
