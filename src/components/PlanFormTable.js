import { useState } from 'react'
import { colors } from '../styles/style-constants'

import styled from 'styled-components'

const PlanFormContainer = styled.div``

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`

const PlanSelector = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 8px 4px;
`

const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
`

const PlanNameBox = styled.span`
  background-color: ${colors.netflixRed};
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 700;
  border-radius: 2px;

  width: 100%;
  height: 75px;
  padding: 1px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ isChecked }) => (isChecked ? '1' : '0.6')};
`

export default function PlanFormTable() {
  const [checkedItem, setCheckedItem] = useState('premium')

  return (
    <PlanFormContainer>
      <HeaderContainer>
        <PlanSelector htmlFor='plan-basic'>
          <RadioButton
            id='plan-basic'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'basic'}
            onChange={() => setCheckedItem('basic')}
          />
          <PlanNameBox isChecked={checkedItem === 'basic'}>Basic</PlanNameBox>
        </PlanSelector>
        <PlanSelector htmlFor='plan-standard'>
          <RadioButton
            id='plan-standard'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'standard'}
            onChange={() => setCheckedItem('standard')}
          />
          <PlanNameBox isChecked={checkedItem === 'standard'}>
            Standard
          </PlanNameBox>
        </PlanSelector>
        <PlanSelector htmlFor='plan-premium'>
          <RadioButton
            id='plan-premium'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'premium'}
            onChange={() => setCheckedItem('premium')}
          />
          <PlanNameBox isChecked={checkedItem === 'premium'}>
            Premium
          </PlanNameBox>
        </PlanSelector>
      </HeaderContainer>
    </PlanFormContainer>
  )
}
