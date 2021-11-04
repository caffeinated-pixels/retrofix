import { Header, StoryCards, FaqSection, Footer } from '../parts/'
import { footerHomeContent } from '../fixtures/footer-content'

export default function Home() {
  return (
    <>
      <Header />
      <StoryCards />
      <FaqSection />
      <Footer footerContent={footerHomeContent} />
    </>
  )
}

// TODO: faq section should probably be part of <main>
