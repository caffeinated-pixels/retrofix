import { useState } from 'react'
import { PlanTable } from '../components/'
import { colors } from '../styles/style-constants'

import styled from 'styled-components'

const PlanFormContainer = styled.div``

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 600px) {
    width: 60%;
    margin-left: auto;
  }
`

const PlanSelector = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 8px 4px;

  @media (min-width: 600px) {
    padding: 0;
    width: 90px;
    height: 90px;
  }
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
  position: relative;

  opacity: ${({ isChecked }) => (isChecked ? '1' : '0.6')};

  [type='radio']:focus + &,
  [type='radio']:active + & {
    box-shadow: 0 0 3px 0 ${colors.netflixRed};
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    border: 0 solid transparent;
    border-width: ${({ isChecked }) => (isChecked ? '15px' : '0')};
    border-top-color: ${colors.netflixRed};
  }
`

const SmallPrint = styled.small`
  display: block;
  font-size: 0.8125rem;
  color: ${colors.textMedGrey};

  @media (min-width: 600px) {
    padding: 0 150px 0 16px;
  }

  &:last-of-type {
    margin-top: 10px;
  }
`

const Link = styled.a`
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

export default function PlanFormTable() {
  const [checkedItem, setCheckedItem] = useState('standard')

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
      <PlanTable selectedPlan={checkedItem} />
      <SmallPrint>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
        to your internet service and device capabilities. Not all content is
        available in all resolutions. See our <Link href='#'>Terms of Use</Link>{' '}
        for more details.
      </SmallPrint>
      <SmallPrint>
        Only people who live with you may use your account. Watch on 4 different
        devices at the same time with Premium, 2 with Standard and 1 with Basic.
      </SmallPrint>
    </PlanFormContainer>
  )
}
