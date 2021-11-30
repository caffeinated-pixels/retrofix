import { Header, Navbar, StoryCards, FaqSection, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { HeaderFeature, SiteLogo, LinkButton } from '../components'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header hasBtn hasBorder>
        <Header.ImageGradient>
          <Navbar>
            <Header.LogoWrapper>
              <SiteLogo />
            </Header.LogoWrapper>
            <LinkButton href='/signin'>Sign In</LinkButton>
          </Navbar>
          <HeaderFeature />
        </Header.ImageGradient>
      </Header>
      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>

      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
