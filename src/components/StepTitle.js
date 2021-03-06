import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  margin: 0.2em 0 0.4em;
`

export default function StepTitle({ children }) {
  return <Title>{children}</Title>
}
