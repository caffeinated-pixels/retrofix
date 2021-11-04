import styled from 'styled-components'
import AccordionItem from '../components/AccordionItem'
import { cardBorderBottom } from '../styles/style-constants'
import faqContentData from '../fixtures/faq-content.json'

const FaqContainer = styled.section`
  padding: 50px 0;
  border-bottom: ${cardBorderBottom};
`

const Title = styled.h2`
  text-align: center;
  font-size: 1.625rem;
  line-height: 1.15;
  padding: 0 5%;
`

const AccordionWrapper = styled.div`
  margin: 1.25em auto;
  max-width: 815px;
`

export default function FaqSection() {
  const accordionItems = faqContentData.map(({ id, question, answer }) => (
    <AccordionItem key={id} question={question} answer={answer}>
      Dave${id}
    </AccordionItem>
  ))

  return (
    <FaqContainer>
      <Title>Frequently Asked Questions</Title>
      <AccordionWrapper>{accordionItems}</AccordionWrapper>
    </FaqContainer>
  )
}
