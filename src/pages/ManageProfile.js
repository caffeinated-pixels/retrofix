import { useNavigate } from 'react-router-dom'
import { Header, Navbar } from '../parts/'
import { SemanticHeader, PageContainer } from '../containers/'
import { SiteLogo, profile } from '../components'
import { firebaseAuth } from '../firebase/config'
import { updateProfile } from '@firebase/auth'
import { PROFILE } from '../constants/routes'

export default function ManageProfile() {
  const navigate = useNavigate()

  const handleClick = async (id) => {
    try {
      await updateProfile(firebaseAuth.currentUser, {
        photoURL: `./images/users/${id}.png`,
      })
      navigate(PROFILE)
    } catch (error) {
      console.log(error.message)
    }
  }

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
            <profile.NavButton onClick={() => handleClick(1)}>
              <profile.Avatar imgUrl='./images/users/1.png' />
              <profile.Name>
                The <br />
                Brigand
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>

          <profile.ListItem>
            <profile.NavButton onClick={() => handleClick(2)}>
              <profile.Avatar imgUrl='./images/users/2.png' />
              <profile.Name>
                The <br />
                Gentleman
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>

          <profile.ListItem>
            <profile.NavButton onClick={() => handleClick(3)}>
              <profile.Avatar imgUrl='./images/users/3.png' />
              <profile.Name>
                The <br />
                Mercenary
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>

          <profile.ListItem>
            <profile.NavButton onClick={() => handleClick(4)}>
              <profile.Avatar imgUrl='./images/users/4.png' />
              <profile.Name>
                The <br />
                Navvie
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>

          <profile.ListItem>
            <profile.NavButton onClick={() => handleClick(5)}>
              <profile.Avatar imgUrl='./images/users/5.png' />
              <profile.Name>
                The <br />
                Preacher
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>

          <profile.ListItem>
            <profile.NavButton onClick={() => handleClick(6)}>
              <profile.Avatar imgUrl='./images/users/6.png' />
              <profile.Name>
                The <br />
                Thug
              </profile.Name>
            </profile.NavButton>
          </profile.ListItem>
        </profile.ProfileList>
      </profile.MainContainer>
    </PageContainer>
  )
}
