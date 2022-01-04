import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Form = styled.form`
  margin: 10px 0 20px;
`

const Input = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  padding: 0 10px;

  font-size: 0.875rem;

  @media (min-width: 740px) {
    font-size: 1rem;
  }
`

const HiddenLabel = styled.label`
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
  color: ${colors.errTextRed};
  font-size: 0.8125rem;
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  margin: 0 10px 0 0;
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`

const Label = styled.label``

export default function GeneralForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>
}

GeneralForm.Input = ({ children, ...restProps }) => (
  <Input {...restProps}></Input>
)

GeneralForm.HiddenLabel = ({ children, ...restProps }) => (
  <HiddenLabel {...restProps}>{children}</HiddenLabel>
)

GeneralForm.InputError = ({ children, ...restProps }) => (
  <InputError {...restProps}>{children}</InputError>
)

GeneralForm.CheckboxWrapper = ({ children, ...restProps }) => (
  <CheckboxWrapper {...restProps}>{children}</CheckboxWrapper>
)

GeneralForm.Checkbox = ({ children, ...restProps }) => (
  <Checkbox {...restProps}>{children}</Checkbox>
)

GeneralForm.Label = ({ children, ...restProps }) => (
  <Label {...restProps}>{children}</Label>
)
