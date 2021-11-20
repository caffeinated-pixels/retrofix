import styled from 'styled-components'

const Logo = styled.img``

export default function SiteLogo({ ...restProps }) {
  return (
    <Logo src='../images/misc/logo.svg' alt='Netflix logo' {...restProps} />
  )
}
