import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/FirebaseAuthContext'
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
  padding: 0;
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

      <MainContainer>
        <Title>Who's watching?</Title>
        <ProfileList>
          <ListItem>
            <NavLink to={BROWSE}>
              <Avatar imgUrl={user?.photoURL} />
              <Name>{user?.displayName}</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>
              <Avatar imgUrl='./images/users/kids.jpg' />
              <Name>Children</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={MANAGE_PROFILE}>
              <ChooseAvatar imgUrl='./images/users/retrofix.svg' />
              <Name>Choose avatar</Name>
            </NavLink>
          </ListItem>
        </ProfileList>
      </MainContainer>
    </PageContainer>
  )
}
