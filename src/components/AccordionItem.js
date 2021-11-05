import { useContext } from 'react'
import styled from 'styled-components'
import { AccordionContext } from '../context/AccordionContext'
import { colors } from '../styles/style-constants'

import React from 'react'

const AccordionItemWrapper = styled.div`
  margin-bottom: 8px;
`

const QuestionHeader = styled.h3`
  font-weight: 400;
  line-height: normal;
  font-size: 1.125rem;
`

const HeaderButton = styled.button`
  width: 100%;
  text-align: left;
  border-radius: 0;
  border: none;
  background-color: ${colors.accordionGrey};
  color: #fff;
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
`

const OpenIcon = styled.i`
  /* transform: rotate(45deg); */
`

const AnswerPanel = styled.div`
  white-space: pre-line; // need this to make the line breaks work
  background-color: ${colors.accordionGrey};
  padding: 1.2em;
  margin-bottom: 8px;
  font-size: 1.125rem;
  line-height: normal;
  overflow: hidden;
`

export default function AccordionItem({ answer, question }) {
  const { activeAccordionItem, setToggle } = useContext(AccordionContext)

  return (
    <AccordionItemWrapper>
      <QuestionHeader>
        <HeaderButton onClick={() => setToggle(question)}>
          {question}
          <OpenIcon className='fas fa-plus'></OpenIcon>
        </HeaderButton>
      </QuestionHeader>
      <AnswerPanel hidden={activeAccordionItem !== question}>
        {answer}
      </AnswerPanel>
    </AccordionItemWrapper>
  )
}
