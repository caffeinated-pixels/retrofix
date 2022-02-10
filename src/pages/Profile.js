import { useAuth } from '../context/FirebaseAuthContext'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo, profile } from '../components'
import { BROWSE, MANAGE_PROFILE } from '../constants/routes'

export default function Profile() {
  const user = useAuth()

  return (
    <PageContainer>
      <SemanticHeader>
        <Navbar>
          <Header.LogoWrapper>
            <SiteLogo />
          </Header.LogoWrapper>
        </Navbar>
      </SemanticHeader>

      <profile.MainContainer>
        <profile.Title>Who's watching?</profile.Title>
        <profile.ProfileList>
          <profile.ListItem>
            <profile.NavLink to={BROWSE}>
              <profile.Avatar imgUrl={user?.photoURL} />
              <profile.Name>{user?.displayName}</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/kids.jpg' />
              <profile.Name>Children</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to={MANAGE_PROFILE}>
              <profile.ChooseAvatar imgUrl='./images/users/retrofix.svg' />
              <profile.Name>Choose avatar</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
        </profile.ProfileList>
      </profile.MainContainer>
    </PageContainer>
  )
}
