import styled from 'styled-components'

const Logo = styled.img`
  height: 1.5rem;

  @media (min-width: 550px) {
    width: 6.75rem;
    height: 2rem;
  }
`

export default function SiteLogo({ ...restProps }) {
  return (
    <Logo src='../images/misc/logo.svg' alt='Netflix logo' {...restProps} />
  )
}
