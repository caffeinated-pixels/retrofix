import { BrowseHeaderDesktop, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <>
      <BrowseHeaderDesktop />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
