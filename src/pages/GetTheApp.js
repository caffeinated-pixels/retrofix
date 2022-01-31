import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { SiteLogo } from '../components'

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

const MetadataBox = styled.div``

const ShowTitle = styled.h1`
  text-align: center;
`

const ShowInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  margin-bottom: 2em;
  font-size: 0.75rem;
  color: #999;
`

const Info = styled.div``

const MaturityRating = styled.div`
  border: 1px solid #4c4c44;
  padding: 0.1em 0.2em 0;
`

export default function GetTheApp() {
  const { state: show } = useLocation()
  const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/large.jpg`

  return (
    <PageContainer>
      <Header>
        <LogoWrapper>
          <SiteLogo />
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
      </DetailsContainer>
    </PageContainer>
  )
}
