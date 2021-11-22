import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Container = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colors.bgBlack)};
  color: ${({ txtColor }) => (txtColor ? txtColor : colors.bgWhite)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2px;
`

export default function PageContainer({
  children,
  bgColor,
  txtColor,
  ...restProps
}) {
  return (
    <Container bgColor={bgColor} txtColor={txtColor} {...restProps}>
      {children}
    </Container>
  )
}
