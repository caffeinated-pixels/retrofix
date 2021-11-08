import { Header, StoryCards, FaqSection, Footer } from '../parts/'
import MainContainer from '../parts/MainContainer'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>

      <Footer footerContent={footerHomeContent} />
    </>
  )
}
