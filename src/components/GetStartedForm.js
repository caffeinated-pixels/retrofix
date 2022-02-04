import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useFormValidation from '../hooks/useFormValidation'
import { useSignUpContext } from '../context/SignUpContext'
import {
  colors,
  inputErrorBorderBottom,
  focusOutline,
} from '../styles/style-constants'
import { REGISTRATION } from '../constants/routes'
import isEmailValid from '../helpers/validate-email'

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 950px) {
    padding-top: 0.85rem;
    max-width: 950px;
  }
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
  display: grid;
  grid-template-areas:
    'input'
    'error'
    'button';

  grid-template-rows: auto minmax(10px, auto) auto;

  margin: 10px auto;
  max-width: 664px;

  @media (min-width: 950px) {
    grid-template-areas:
      'input button'
      'error error';

    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  @media (min-width: 1450px) {
    max-width: 746px;
  }
`

const InputWrapper = styled.div`
  grid-area: input;
`

const EmailInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 14px 10px;
  border: 1px solid #8c8c8c;
  border-bottom: ${({ emailError }) =>
    emailError ? inputErrorBorderBottom : ''};
  font-size: 0.875rem;

  @media (min-width: 740px) {
    font-size: 1rem;
    padding: 19px 10px;
  }

  @media (min-width: 950px) {
    padding: 20px 10px;
    max-width: 450px;
  }

  @media (min-width: 1450px) {
    padding: 25px 10px;
    max-width: 500px;
  }

  &:focus-visible {
    outline: ${focusOutline};
    outline: none;
  }
`

// label css based on https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements
const EmailLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const InputError = styled.p`
  grid-area: error;
  justify-self: start;
  text-align: left;
  font-size: 0.9375rem;
  color: ${colors.errTextOrangeLighter};
  padding: 6px 3px 0;
  margin-bottom: 10px;
`

const EmailSubmit = styled.button`
  grid-area: button;
  justify-self: center;
  background-color: ${colors.netflixRed};
  color: #fff;
  border: 0;
  margin: 0.25em 0;
  padding: 0 1em;
  min-height: 40px;
  min-width: max-content;
  letter-spacing: 0.1px;
  line-height: initial;
  cursor: pointer;

  @media (min-width: 950px) {
    font-size: 1.625rem;
    margin: 0;
  }

  @media (min-width: 1450px) {
    font-size: 1.875rem;
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
  const { globalEmail, setGlobalEmail } = useSignUpContext()
  const [state, dispatch] = useFormValidation({
    email: globalEmail,
    inputError: false,
  })

  const navigate = useNavigate()

  const emailError = state.inputError && !isEmailValid(state.email)

  const Signup = (e) => {
    e.preventDefault()

    if (isEmailValid(state.email)) {
      setGlobalEmail(state.email)
      navigate(REGISTRATION)
    } else {
      console.log('invalid email!')
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    }
  }

  return (
    <Form>
      <FormText>
        Ready to sign away your soul? Enter your email to get started.
      </FormText>
      <EmailForm>
        <InputWrapper>
          <EmailInput
            id='email-input'
            type='email'
            placeholder='Email address'
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'SET_EMAIL', payload: e.target.value })
            }
            emailError={emailError}
          />
          <EmailLabel htmlFor='email-input'>Email address</EmailLabel>
        </InputWrapper>

        {emailError && (
          <InputError>Please enter a valid email address</InputError>
        )}

        <EmailSubmit onClick={Signup}>
          Get Started
          <ChevronIcon className='fas fa-chevron-right' />
        </EmailSubmit>
      </EmailForm>
    </Form>
  )
}
