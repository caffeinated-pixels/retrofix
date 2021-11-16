import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#000000')};
  min-height: 100vh;
  color: ${({ txtColor }) => (txtColor ? txtColor : '#fff')};
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
