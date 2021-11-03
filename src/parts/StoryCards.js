import styled from 'styled-components'
import colors from '../styles/colors'

const StoryCardsContainer = styled.div``

const StoryCard = styled.section`
  width: 100%;
  max-width: 950px;
  padding: 50px 5%;
  border-bottom: 8px solid #222;
`

const TextWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;
`

const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormText = styled.h3`
  padding: 0 5%;
  max-width: 450px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.125rem;
`

const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
`
const EmailInput = styled.input`
  margin: 10px auto;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #8c8c8c;
  font-size: 0.875rem;
`

const EmailSubmit = styled.button`
  background-color: ${colors.netflixRed};
  color: #fff;
  border: 0;
  margin: 0.25em auto;
  padding: 0 1em;
  min-height: 40px;
  min-width: 74px;
  letter-spacing: 0.1px;
  line-height: initial;
  cursor: pointer;
`

export default function StoryCards() {
  return (
    <StoryCardsContainer>
      <StoryCard>
        <TextWrapper>
          <Title>Unlimited movies, TV shows, and more.</Title>
          <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
          <Form>
            <FormText>
              Ready to watch? Enter your email to create or restart your
              membership.
            </FormText>
            <EmailForm>
              <EmailInput type='email' placeholder='Email address' />
              <EmailSubmit>Get Started</EmailSubmit>
            </EmailForm>
          </Form>
        </TextWrapper>
      </StoryCard>
    </StoryCardsContainer>
  )
}

/* 
StoryCardsContainer (div)
    header-card (section)
    watch-on-tv (section)
    download (section)
    watch-everywhere (section)
    kids-profiles (section)
    faqs
*/
