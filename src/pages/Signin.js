import { Header, Footer } from '../parts/'
import { MainContainer } from '../containers/'
import { footerHomeRegistration } from '../fixtures/footer-content'

export default function Signin() {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Sign in form goes here!</h1>
      </MainContainer>
      <Footer footerContent={footerHomeRegistration} borderTop={true} />
    </>
  )
}
