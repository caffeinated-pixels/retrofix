import styled from 'styled-components'
import { colors } from '../styles/style-constants'

import React from 'react'

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
`

export default function AccordionItem({
  children,
  answer,
  question,
  ...restProps
}) {
  console.log(answer)
  return (
    <>
      <QuestionHeader>
        <HeaderButton>
          {question}
          <OpenIcon className='fas fa-plus'></OpenIcon>
        </HeaderButton>
      </QuestionHeader>
      <AnswerPanel>{answer}</AnswerPanel>
    </>
  )
}
