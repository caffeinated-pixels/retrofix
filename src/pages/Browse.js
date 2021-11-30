import styled from 'styled-components'
import { RegNavbar, Footer } from '../parts/'
import { SemanticHeader, MainContainer } from '../containers/'
import { footerHomeContent } from '../fixtures/footer-content'

const BrowseHeader = styled.div``

export default function Browse() {
  return (
    <>
      <SemanticHeader>
        <BrowseHeader>
          <RegNavbar noBorder />
        </BrowseHeader>
      </SemanticHeader>

      <MainContainer>
        <h1>Carousels go here</h1>
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}

/* 
header (build from scratch)
  navbar (build from scratch)
  billboard (on larger devices)
  my list carousel
/header

main
  genre carousels
/main

footer


*/
