import { BrowseHeaderDesktop, StreamingContent, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <>
      <BrowseHeaderDesktop />
      <StreamingContent />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
