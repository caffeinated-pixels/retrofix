import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const PageContainer = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colors.bgBlack)};
  color: ${({ txtColor }) => (txtColor ? txtColor : colors.bgWhite)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2px;
`

export default PageContainer
