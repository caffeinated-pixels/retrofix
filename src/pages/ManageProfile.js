import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo } from '../components'
import { BROWSE, MANAGE_PROFILE } from '../constants/routes'
import { colors } from '../styles/style-constants'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`

const Title = styled.h1`
  font-size: max(1.875rem, 3.5vw);
  font-weight: 400;
`

const ProfileList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2.5em;
  gap: 2vw;
`

const ListItem = styled.li`
  list-style: none;
`
const NavLink = styled(Link)`
  color: ${colors.textLightGrey};
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  &:hover > div::after {
    border-color: white;
  }
`

const Avatar = styled.div`
  position: relative;
  background-color: ${colors.textDarkGrey};
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : '')};
  background-size: cover;
  height: clamp(84px, 10vw, 200px);
  width: clamp(84px, 10vw, 200px);
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 4px;
    border: 2px solid transparent;
  }
`

const ChooseAvatar = styled(Avatar)`
  background-color: transparent;
`

const Name = styled.p`
  margin: 0.6em 0;
  text-align: center;
  font-size: max(0.75rem, 1.3vw);
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

      <MainContainer>
        <Title>Choose an avatar</Title>
        <ProfileList>
          <ListItem>
            <NavLink to='#'>
              <Avatar imgUrl='./images/users/1.png' />
              <Name>Brigand</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <ChooseAvatar imgUrl='./images/users/2.png' />
              <Name>Gentleman</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <ChooseAvatar imgUrl='./images/users/3.png' />
              <Name>Mercenary</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <ChooseAvatar imgUrl='./images/users/4.png' />
              <Name>Navvie</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <ChooseAvatar imgUrl='./images/users/5.png' />
              <Name>Preacher</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <ChooseAvatar imgUrl='./images/users/6.png' />
              <Name>Thug</Name>
            </NavLink>
          </ListItem>
        </ProfileList>
      </MainContainer>
    </PageContainer>
  )
}
