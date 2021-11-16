import { PageContainer, Navbar } from '../parts'
import { SiteLogo, NavLink } from '../components'
import { SIGN_IN } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <Navbar>
        <SiteLogo />
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </Navbar>
    </PageContainer>
  )
}

/* 
header
main
footer


*/
