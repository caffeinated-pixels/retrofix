import { Header, StoryCards, FaqSection, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>

      <Footer footerContent={footerHomeContent} increasedPadding={true} />
    </>
  )
}
