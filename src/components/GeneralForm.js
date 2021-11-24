import styled from 'styled-components'

const GeneralForm = styled.form`
  margin: 10px 0 20px;
`

GeneralForm.Input = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  padding: 0 10px;

  font-size: 0.875rem;

  @media (min-width: 740px) {
    font-size: 1rem;
  }
`

GeneralForm.HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

GeneralForm.CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

GeneralForm.Checkbox = styled.input`
  margin: 0 10px 0 0;
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`

GeneralForm.Label = styled.label``

export default GeneralForm

// export default function GeneralForm({ children, ...restProps }) {
//   return <Form {...restProps}>{children}</Form>
// }

// GeneralForm.Input = ({ children, ...restProps }) => (
//   <Input {...restProps}></Input>
// )

// GeneralForm.HiddenLabel = ({ children, ...restProps }) => (
//   <HiddenLabel {...restProps}>{children}</HiddenLabel>
// )

// GeneralForm.CheckboxWrapper = ({ children, ...restProps }) => (
//   <CheckboxWrapper {...restProps}>{children}</CheckboxWrapper>
// )

// GeneralForm.Checkbox = ({ children, ...restProps }) => (
//   <Checkbox {...restProps}>{children}</Checkbox>
// )

// GeneralForm.Label = ({ children, ...restProps }) => (
//   <Label {...restProps}>{children}</Label>
// )
