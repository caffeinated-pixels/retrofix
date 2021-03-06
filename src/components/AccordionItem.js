import styled from 'styled-components'
import { useAccordionContext } from '../context/AccordionContext'
import { colors } from '../styles/style-constants'

import React from 'react'

const AccordionItemWrapper = styled.div`
  margin-bottom: 8px;
`

const QuestionHeader = styled.h3`
  font-weight: inherit;
  font-size: inherit;
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
  cursor: pointer;

  &:hover,
  &:focus-visible {
    filter: brightness(1.3);
  }
`

const OpenIcon = styled.i`
  transform: ${({ isActive }) => (isActive ? 'rotate(45deg)' : null)};
`

const AnswerPanel = styled.div`
  white-space: pre-line; // need this to make the line breaks work
  background-color: ${colors.accordionGrey};
  padding: 1.2em;
  margin-bottom: 8px;
  overflow: hidden;
`

export default function AccordionItem({ id, answer, question }) {
  const { activeAccordionItem, setToggle } = useAccordionContext()

  return (
    <AccordionItemWrapper>
      <QuestionHeader>
        <HeaderButton
          aria-disabled='false'
          aria-expanded={activeAccordionItem === question}
          aria-controls={`answer-${id}`}
          id={`question-${id}`}
          onClick={() => setToggle(question)}
        >
          {question}
          <OpenIcon
            className='fas fa-plus'
            isActive={activeAccordionItem === question}
          ></OpenIcon>
        </HeaderButton>
      </QuestionHeader>
      <AnswerPanel
        id={`answer-${id}`}
        role='region'
        aria-labelledby={`question-${id}`}
        hidden={activeAccordionItem !== question}
      >
        {answer}
      </AnswerPanel>
    </AccordionItemWrapper>
  )
}

// aria attributes based on https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
