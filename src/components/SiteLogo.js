import styled from 'styled-components'

const Logo = styled.img`
  height: 1.5rem;

  @media (min-width: 550px) {
    width: 6.75rem;
    height: 2rem;
  }

  @media (min-width: 950px) {
    width: 8.375rem;
    height: 2.25rem;
  }

  @media (min-width: 1450px) {
    width: 10.4375rem;
    height: 2.8125rem;
  }
`

export default function SiteLogo({ ...restProps }) {
  return (
    <Logo src='../images/misc/logo.svg' alt='Netflix logo' {...restProps} />
  )
}
