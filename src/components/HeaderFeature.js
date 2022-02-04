import styled from 'styled-components'
import { GetStartedForm } from './'

const FeatureWrapper = styled.div`
  text-align: center;
  padding: 65px 5%;
  max-width: 950px;
  margin: 0 auto;

  @media (min-width: 550px) {
    padding: 145px 45px; // 75px + 70px on Netflix
  }

  @media (min-width: 950px) {
    padding: 145px 0;
  }

  @media (min-width: 1450px) {
    padding: 145px 0 70px;
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;

  @media (min-width: 550px) {
    font-size: 3.125rem;
  }

  @media (min-width: 1450px) {
    font-size: 4rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;

  @media (min-width: 550px) {
    font-size: 1.625rem;
  }
`

export default function HeaderFeature() {
  return (
    <FeatureWrapper>
      <Title>Retrotastic movies, TV shows, and less.</Title>
      <Subtitle>Never watch. Never cancel.</Subtitle>
      <GetStartedForm />
    </FeatureWrapper>
  )
}
