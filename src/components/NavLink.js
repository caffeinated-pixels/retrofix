import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 0.2px;
  font-weight: 700;
  line-height: 3.2;
  margin: 0 10px;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }

  &:visited {
    color: inherit;
  }
`

export default function NavLink({ href, children }) {
  return <Link href={href}>{children}</Link>
}
