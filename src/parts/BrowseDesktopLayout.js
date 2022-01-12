import { BrowseHeaderDesktop, StreamingContentMobile, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <>
      <BrowseHeaderDesktop />
      <StreamingContentMobile />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
