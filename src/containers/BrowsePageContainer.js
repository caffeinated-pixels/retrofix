import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Container = styled.div`
  background-color: ${colors.bgBrowseDarkGrey};
`

export default function BrowsePageContainer({ children }) {
  return <Container>{children}</Container>
}
