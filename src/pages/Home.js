import { Header, StoryCards, FaqSection, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { HeaderFeature } from '../components'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header>
        <HeaderFeature />
      </Header>
      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>

      <Footer footerContent={footerHomeContent} increasedPadding={true} />
    </>
  )
}
