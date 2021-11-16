import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Container = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colors.bgBlack)};
  min-height: 100vh;
  color: ${({ txtColor }) => (txtColor ? txtColor : colors.bgWhite)};
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
