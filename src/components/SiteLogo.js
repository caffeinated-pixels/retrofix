import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HOME } from '../constants/routes'

const Logo = styled.img`
  filter: invert(42%) sepia(79%) saturate(2023%) hue-rotate(164deg)
    brightness(98%) contrast(103%);
`

export default function SiteLogo({ ...restProps }) {
  return (
    <Link to={HOME}>
      <Logo src='../images/misc/logo.svg' alt='RetroFix home' {...restProps} />
    </Link>
  )
}
