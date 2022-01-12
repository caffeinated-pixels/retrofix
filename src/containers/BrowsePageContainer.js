import styled from 'styled-components'

const Container = styled.div`
  background-color: #141414;
`

export default function BrowsePageContainer({ children }) {
  return <Container>{children}</Container>
}
