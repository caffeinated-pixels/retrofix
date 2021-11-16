import styled from 'styled-components'

const Link = styled.a``

export default function NavLink({ href, children }) {
  return <Link href={href}>{children}</Link>
}
