import styled from 'styled-components'

const RegContextBody = styled.div`
  font-size: 1.0625rem;
  max-width: 300px;

  @media (min-width: 600px) {
    margin: ${({ regForm }) => (regForm ? '' : '0 auto')};
  }
`

export default RegContextBody
