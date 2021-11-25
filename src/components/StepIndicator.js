import styled from 'styled-components'

const Container = styled.p`
  text-transform: uppercase;
  font-size: 0.8125rem;
`
const BoldText = styled.b``

export default function StepIndicator({ currentStep }) {
  return (
    <Container>
      step <BoldText>{currentStep}</BoldText> of <BoldText>2</BoldText>
    </Container>
  )
}
