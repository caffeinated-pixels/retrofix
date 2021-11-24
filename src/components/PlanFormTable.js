import styled from 'styled-components'

const PlanFormContainer = styled.div``

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`

const PlanSelector = styled.label`
  width: 100%;
  text-align: center;

  border: 1px solid red;
`

const RadioButton = styled.input``

export default function PlanFormTable() {
  return (
    <PlanFormContainer>
      <HeaderContainer>
        <PlanSelector htmlFor='plan-basic'>
          <RadioButton id='plan-basic' type='radio' name='plan-choice' /> Basic
        </PlanSelector>
        <PlanSelector htmlFor='plan-standard'>
          <RadioButton id='plan-standard' type='radio' name='plan-choice' />
          Standard
        </PlanSelector>
        <PlanSelector htmlFor='plan-premium'>
          <RadioButton id='plan-premium' type='radio' name='plan-choice' />
          Premium
        </PlanSelector>
      </HeaderContainer>
    </PlanFormContainer>
  )
}
