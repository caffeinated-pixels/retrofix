import styled from 'styled-components'
import { AccordionItem, GetStartedForm } from '../components/'
import { cardBorderBottom } from '../styles/style-constants'
import faqContentData from '../fixtures/faq-content.json'
import { AccordionContextProvider } from '../context/AccordionContext'

const FaqContainer = styled.section`
  padding: 50px 0;
  border-bottom: ${cardBorderBottom};

  @media (min-width: 550px) {
    padding: 70px 45px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 1.625rem;
  line-height: 1.15;
  padding: 0 5%;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }
`

const AccordionWrapper = styled.div`
  margin: 1.25em auto;
  max-width: 815px;

  @media (min-width: 550px) {
    width: 90%;
    margin: 1.5em auto;
  }
`

const FormWrapper = styled.div`
  padding: 0 5%;

  @media (min-width: 550px) {
    padding: 0;
  }
`

export default function FaqSection() {
  const accordionItems = faqContentData.map(({ id, question, answer }) => (
    <AccordionItem key={id} id={id} question={question} answer={answer}>
      Dave${id}
    </AccordionItem>
  ))

  return (
    <FaqContainer>
      <Title>Frequently Asked Questions</Title>
      <AccordionContextProvider>
        <AccordionWrapper>{accordionItems}</AccordionWrapper>
      </AccordionContextProvider>
      <FormWrapper>
        <GetStartedForm />
      </FormWrapper>
    </FaqContainer>
  )
}
