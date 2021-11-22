import styled from 'styled-components'

const SimpleContainer = styled.main`
  flex-grow: 1;
  overflow: hidden;
  padding-bottom: 95px;
`

const CenterContainer = styled.div`
  padding: 20px 32px 60px;
  margin: 0 auto 15px;
  max-width: 978px;
`

export default function RegContentContainer({ children }) {
  return (
    <SimpleContainer>
      <CenterContainer>{children}</CenterContainer>
    </SimpleContainer>
  )
}
