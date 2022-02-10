import styled from 'styled-components'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo, profile } from '../components'
import { BROWSE } from '../constants/routes'

const ProfileList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2.5em;
  gap: 2vw;
`

export default function ManageProfile() {
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
        <profile.Title>Choose an avatar</profile.Title>
        <ProfileList>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/1.png' />
              <profile.Name>Brigand</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/2.png' />
              <profile.Name>Gentleman</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/3.png' />
              <profile.Name>Mercenary</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/4.png' />
              <profile.Name>Navvie</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/5.png' />
              <profile.Name>Preacher</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
          <profile.ListItem>
            <profile.NavLink to='#'>
              <profile.Avatar imgUrl='./images/users/6.png' />
              <profile.Name>Thug</profile.Name>
            </profile.NavLink>
          </profile.ListItem>
        </ProfileList>
      </profile.MainContainer>
    </PageContainer>
  )
}
