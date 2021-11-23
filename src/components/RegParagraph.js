import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 1.0625rem;
  max-width: 300px;

  @media (min-width: 600px) {
    margin: 0 auto;
  }
`

export default function RegParagraph({ children }) {
  return <Paragraph>{children}</Paragraph>
}
