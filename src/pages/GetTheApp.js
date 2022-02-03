import styled, { css } from 'styled-components'
import { useLocation, Link } from 'react-router-dom'
import { SiteLogo } from '../components'
import { HOME, BROWSE } from '../constants/routes'
import { colors } from '../styles/style-constants'

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;

  height: 10%;

  background-image: linear-gradient(
    to bottom,
    #000 0,
    #000 25%,
    transparent 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 120px;
`

const LogoLink = styled(Link)``

const ShowImage = styled.div`
  height: 80vh;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: 50% 0;
  background-size: cover;
`

const DetailsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
`

const MetadataBox = styled.div`
  background-image: linear-gradient(to bottom, transparent, #000);
`

const ShowTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.33em;
`

const ShowInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  padding-bottom: 2em;
  font-size: 0.75rem;
  color: #999;
`

const Info = styled.div``

const MaturityRating = styled.div`
  border: 1px solid #4c4c44;
  padding: 0.1em 0.2em 0;
`

const AppLaunchBox = styled.div`
  background-color: #000;
`

const WatchNetflix = styled.p`
  text-align: center;
  font-size: 4vh;
  font-weight: 700;
  margin: 0 1em;
`

const buttonBaseCss = css`
  display: block;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;
`

const AppLinkButton = styled(Link)`
  ${buttonBaseCss}
  background: ${colors.netflixRed};
  border-radius: 0.1em;
  margin: 1em auto;
  padding: 1em 0;
  width: min(80%, 400px);
`

const ReturnLinkButton = styled(Link)`
  ${buttonBaseCss}
  width: 100vw;
  background: #141414;
  padding: 1.2em 0;
  border-top: 1px solid #1c1c1c;
  font-size: 2.5vh;
  line-height: 2;
`

const ReturnIcon = styled.i`
  margin-right: 0.5em;
`

export default function GetTheApp() {
  const { state: show } = useLocation()
  const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/large.jpg`

  return (
    <PageContainer>
      <Header>
        <LogoWrapper>
          <LogoLink to={HOME}>
            <SiteLogo />
          </LogoLink>
        </LogoWrapper>
      </Header>
      <ShowImage imgUrl={imgUrl}></ShowImage>
      <DetailsContainer>
        <MetadataBox>
          <ShowTitle>{show.title}</ShowTitle>
          <ShowInfoBox>
            <Info>{show.year}</Info>
            <MaturityRating>TV-{show.maturity}</MaturityRating>
            <Info>{show.length}</Info>
          </ShowInfoBox>
        </MetadataBox>
        <AppLaunchBox>
          <WatchNetflix>Watch NetFlix on your phone or tablet</WatchNetflix>
          <AppLinkButton to='#'>Get the free app</AppLinkButton>
        </AppLaunchBox>
        <ReturnLinkButton to={BROWSE}>
          <ReturnIcon className='fas fa-share' />
          Back to Browse Page
        </ReturnLinkButton>
      </DetailsContainer>
    </PageContainer>
  )
}
