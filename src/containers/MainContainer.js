import styled from 'styled-components'

const MainContainer = styled.main`
  opacity: ${({ opacity }) => (opacity ? opacity : null)};
`

export default MainContainer
