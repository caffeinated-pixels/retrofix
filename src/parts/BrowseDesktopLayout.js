import { BrowseHeaderDesktop, StreamingContentDesktop, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <>
      <BrowseHeaderDesktop />
      <StreamingContentDesktop />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
