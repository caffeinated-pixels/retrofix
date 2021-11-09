import styled from 'styled-components'
import { colors, focusOutline } from '../styles/style-constants'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 950px;
`

const FormText = styled.p`
  box-sizing: content-box;
  max-width: 450px;
  padding: 0 5%;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25;
  text-align: center;

  @media (min-width: 740px) {
    font-size: 1.44rem;
  }

  @media (min-width: 950px) {
    font-size: 1.2rem;
    padding-bottom: 10px;
    max-width: none;
  }
`

const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  max-width: 664px;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: stretch;
  }
`
const EmailInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #8c8c8c;
  font-size: 0.875rem;

  @media (min-width: 740px) {
    font-size: 1rem;
    padding: 15px 10px;
  }

  @media (min-width: 950px) {
    /* flex: 1 0 auto; */
    margin: 0;
    max-width: 450px;
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`
const EmailLabel = styled.label`
  height: 0;
  opacity: 0;
`

const EmailSubmit = styled.button`
  background-color: ${colors.netflixRed};
  color: #fff;
  border: 0;
  margin: 0.25em 0;
  padding: 0 1em;
  min-height: 40px;
  min-width: 74px;
  letter-spacing: 0.1px;
  line-height: initial;
  cursor: pointer;

  @media (min-width: 950px) {
    font-size: 1.625rem;
    /* flex: 1 0 auto; */
    margin: 0;
  }

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`

const ChevronIcon = styled.i`
  margin-left: 0.5em;
`

export default function GetStartedForm() {
  return (
    <Form>
      <FormText>
        Ready to watch? Enter your email to create or restart your membership.
      </FormText>
      <EmailForm>
        <EmailInput id='email-input' type='email' placeholder='Email address' />
        {/* <EmailLabel htmlFor='email-input'>Email address</EmailLabel> */}
        <EmailSubmit>
          Get Started
          <ChevronIcon className='fas fa-chevron-right' />
        </EmailSubmit>
      </EmailForm>
    </Form>
  )
}
