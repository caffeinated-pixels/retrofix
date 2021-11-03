import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Button = styled.a`
  text-decoration: none;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : colors.netflixRed)};
  color: #fff;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
`

export default function LinkButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
