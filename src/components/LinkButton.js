import styled from 'styled-components'
import { colors, focusOutline } from '../styles/style-constants'

const Button = styled.a`
  text-decoration: none;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : colors.netflixRed)};
  color: #fff;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`

export default function LinkButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
