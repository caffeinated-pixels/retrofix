import { BrowseHeaderDesktop, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function BrowseDesktopLayout() {
  return (
    <>
      <BrowseHeaderDesktop />
      <h1>Desktop layout!!!</h1>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
