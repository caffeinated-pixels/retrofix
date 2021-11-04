import { Header, StoryCards, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header />
      <StoryCards />
      <Footer footerContent={footerHomeContent} />
    </>
  )
}

/* 
nav bar
story-cards-container
  header-card
  watch-on-tv
  download
  watch-everywher
  kids-profiles
  faqs
footer 
*/
