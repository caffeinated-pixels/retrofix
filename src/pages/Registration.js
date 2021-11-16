import { PageContainer, RegNavbar } from '../parts'
import { SiteLogo, NavLink } from '../components'
import { SIGN_IN } from '../constants/routes'
import { colors } from '../styles/style-constants'

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <SiteLogo />
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
    </PageContainer>
  )
}

/* 
header
  logo
  Sign In link

main
  image
  text
  buttion

footer


*/
