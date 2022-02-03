import { useNavigate } from 'react-router-dom'
import useFormValidation from '../hooks/useFormValidation'
import { useSignUpContext } from '../context/SignUpContext'
import { RegNavbar, Footer } from '../parts'
import {
  PageContainer,
  StepHeaderContainer,
  RegContentContainer,
  RegFormContainer,
} from '../containers'
import {
  StepIndicator,
  GeneralForm,
  StepTitle,
  RegFormText,
  SubmitButton,
  NavLink,
} from '../components'

import {
  colors,
  textInputBorder,
  textInputBorderGood,
  textInputBorderBad,
} from '../styles/style-constants'
import { footerHomeRegistration } from '../fixtures/footer-content'
import { SIGN_UP, SIGN_IN } from '../constants/routes'
import isEmailValid from '../helpers/validate-email'

export default function RegForm() {
  const {
    globalFirstName,
    setGlobalFirstName,
    globalEmail,
    setGlobalEmail,
    globalPassword,
    setGlobalPassword,
  } = useSignUpContext()

  const [state, dispatch] = useFormValidation({
    firstName: globalFirstName,
    email: globalEmail,
    password: globalPassword,
    inputError: false,
    firebaseError: '',
  })

  const navigate = useNavigate()

  const isFirstNameInValid = state.firstName.trim().length === 0
  const isEmailInvalid = !isEmailValid(state.email)
  const isPasswordTooShort = state.password.length < 6

  const firstNameError = state.inputError && isFirstNameInValid
  const emailError = state.inputError && isEmailInvalid
  const passwordError = state.inputError && isPasswordTooShort

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFirstNameInValid || isEmailInvalid || isPasswordTooShort) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: false })
      setGlobalFirstName(state.firstName.trim())
      setGlobalEmail(state.email.trim())
      setGlobalPassword(state.password.trim())
      navigate(SIGN_UP)
    }
  }

  const determineBorderColor = (validationError) => {
    if (!state.inputError) {
      return textInputBorder
    }

    if (validationError) {
      return textInputBorderBad
    } else {
      return textInputBorderGood
    }
  }

  return (
    <PageContainer bgColor={colors.bgWhite} txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink to={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegFormContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Create a password to start your membership</StepTitle>
          </StepHeaderContainer>

          <RegFormText>Just a few more steps and you're done!</RegFormText>
          <RegFormText>We hate paperwork, too.</RegFormText>
          <GeneralForm>
            <GeneralForm.InputWrapper>
              <GeneralForm.Input
                id='name'
                type='text'
                placeholder='First Name'
                value={state.firstName}
                borderColor={determineBorderColor(isFirstNameInValid)}
                onChange={(e) =>
                  dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='name'>
                First Name
              </GeneralForm.HiddenLabel>
              {firstNameError && (
                <GeneralForm.InputError>
                  Please enter a name.
                </GeneralForm.InputError>
              )}
            </GeneralForm.InputWrapper>

            <GeneralForm.InputWrapper>
              <GeneralForm.Input
                id='email'
                type='email'
                placeholder='Email'
                value={state.email}
                borderColor={determineBorderColor(isEmailInvalid)}
                onChange={(e) =>
                  dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='email'>
                Email Address
              </GeneralForm.HiddenLabel>
              {emailError && (
                <GeneralForm.InputError>
                  Please enter a valid email address.
                </GeneralForm.InputError>
              )}
            </GeneralForm.InputWrapper>

            <GeneralForm.InputWrapper>
              <GeneralForm.Input
                id='password'
                type='password'
                placeholder='Password'
                value={state.password}
                borderColor={determineBorderColor(isPasswordTooShort)}
                onChange={(e) =>
                  dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='password'>
                Password
              </GeneralForm.HiddenLabel>
              {passwordError && (
                <GeneralForm.InputError>
                  Password should be at least 6 characters long.
                </GeneralForm.InputError>
              )}
            </GeneralForm.InputWrapper>

            <GeneralForm.CheckboxWrapper>
              <GeneralForm.Checkbox id='offers' type='checkbox' />
              <GeneralForm.Label htmlFor='offers'>
                Please do not email me NetFlix special offers
              </GeneralForm.Label>
            </GeneralForm.CheckboxWrapper>

            <SubmitButton onClick={handleSubmit} maxWidth='440px'>
              Next
            </SubmitButton>
          </GeneralForm>
        </RegFormContainer>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
