import { Header, Navbar, StoryCards, FaqSection, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { HeaderFeature, SiteLogo, LinkButton } from '../components'
import { footerHomeContent } from '../fixtures/footer-content'
import { SIGN_IN } from '../constants/routes'

export default function Home() {
  return (
    <>
      <SemanticHeader>
        <Header hasBorder>
          <Header.ImageGradient>
            <Navbar>
              <Header.LogoWrapper>
                <SiteLogo />
              </Header.LogoWrapper>
              <LinkButton to={SIGN_IN}>Sign In</LinkButton>
            </Navbar>
            <HeaderFeature />
          </Header.ImageGradient>
        </Header>
      </SemanticHeader>

      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
