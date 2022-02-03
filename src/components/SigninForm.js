import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { GeneralForm } from '../components'
import { colors, inputErrorBorderBottom } from '../styles/style-constants'

const SignInContentBody = styled.div`
  width: 100%;
  min-height: 550px;
  padding: 20px 5% 30px;

  border-radius: 4px;

  @media (min-width: 740px) {
    min-height: 660px;
    width: 450px;
    margin: 0 auto;

    background-color: ${colors.bgBlackTrans};
    padding: 60px 68px 40px;
    margin-bottom: 90px;
  }
`

const Container = styled.div``

const Title = styled.h1`
  margin-bottom: 28px;
`
const FirebaseErrorDisplay = styled.p`
  margin-bottom: 16px;
  padding: 10px 20px;

  font-size: 0.875rem;
  background-color: ${colors.errTextOrange};

  border-radius: 4px;
`

// take and modify CSS for GeneralForm.Input rather than passing down excessive props
const InputWrapper = styled.div`
  margin-bottom: 16px;
`

const Input = styled(GeneralForm.Input)`
  color: #fff;
  font-size: 1rem;

  height: 50px;
  padding: 16px 20px;

  background-color: ${colors.textDarkGrey};
  border: 0;
  /* border-bottom: ${inputErrorBorderBottom}; */
  border-bottom: ${({ inputError }) =>
    inputError ? inputErrorBorderBottom : null};
  border-radius: 4px;
  margin-bottom: 0;
`

const InputError = styled.p`
  font-size: 0.8125rem;
  color: ${colors.errTextOrange};
  padding: 6px 3px 0;
`

const Text = styled.p`
  color: ${colors.textMedGrey};
  margin-top: 2em;
`

const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

const ReCaptchaText = styled.p`
  font-size: 0.8125rem;
  color: ${colors.textLightGrey};

  margin-top: 1em;
`

export default function SigninForm({ children, ...restProps }) {
  return <SignInContentBody {...restProps}>{children}</SignInContentBody>
}

SigninForm.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

SigninForm.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

SigninForm.FirebaseErrorDisplay = ({ children, ...restProps }) => (
  <FirebaseErrorDisplay {...restProps}>{children}</FirebaseErrorDisplay>
)

SigninForm.InputWrapper = ({ children, ...restProps }) => (
  <InputWrapper {...restProps}>{children}</InputWrapper>
)

SigninForm.Input = ({ children, ...restProps }) => (
  <Input {...restProps}>{children}</Input>
)

SigninForm.InputError = ({ children, ...restProps }) => (
  <InputError {...restProps}>{children}</InputError>
)

SigninForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

SigninForm.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
)

SigninForm.ReCaptchaText = ({ children, ...restProps }) => (
  <ReCaptchaText {...restProps}>{children}</ReCaptchaText>
)
