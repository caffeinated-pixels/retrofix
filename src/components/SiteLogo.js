import styled from 'styled-components'

const Logo = styled.img`
  height: 1.5rem;
`

export default function SiteLogo({ ...restProps }) {
  return <Logo {...restProps} />
}
