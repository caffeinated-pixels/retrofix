import styled from 'styled-components'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo, profile } from '../components'
import { BROWSE } from '../constants/routes'

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
        <profile.ProfileList>
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
        </profile.ProfileList>
      </profile.MainContainer>
    </PageContainer>
  )
}
