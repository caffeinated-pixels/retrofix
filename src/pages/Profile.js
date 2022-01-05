import styled from 'styled-components'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo } from '../components'
import { colors } from '../styles/style-constants'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`

const Title = styled.h1`
  font-size: 1.875rem;
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

const Avatar = styled.div`
  position: relative;
  background-image: url('/images/users/1.png');
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

  &:hover::after {
    border-color: white;
  }
`

const Name = styled.p`
  margin: 0.6em 0;
  text-align: center;
  font-size: 0.75rem;
  color: ${colors.textLightGrey};
`

export default function Profile() {
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
            <Avatar />
            <Name>Dave</Name>
          </ListItem>
          <ListItem>
            <Avatar src='./images/users/1.png' />
            <Name>Children</Name>
          </ListItem>
        </ProfileList>
      </MainContainer>
    </PageContainer>
  )
}

/* 
Header (containing logo)
Main
  h1 (Who's watching?)
  profile divs

*/
