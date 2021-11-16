import { PageContainer, Navbar } from '../parts'
import { SiteLogo } from '../components'
import { colors } from '../styles/style-constants'

export default function Registration() {
  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <Navbar>
        <SiteLogo />
      </Navbar>
    </PageContainer>
  )
}

/* 
header
main
footer


*/
