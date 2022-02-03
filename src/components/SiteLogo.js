import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HOME } from '../constants/routes'

const Logo = styled.img``

export default function SiteLogo({ ...restProps }) {
  return (
    <Link to={HOME}>
      <Logo src='../images/misc/logo.svg' alt='Netflix logo' {...restProps} />
    </Link>
  )
}
