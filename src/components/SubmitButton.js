import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const SubmitButtonContainer = styled.div`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '340px')};
  margin: 24px auto 0;
`

const Button = styled.button`
  width: 100%;
  min-height: 48px;
  background-color: ${colors.netflixRed};
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 1.0625rem;
  font-weight: ${({ boldText }) => (boldText ? '700' : '')};
  letter-spacing: 0.025rem;

  border-radius: 2px;

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: auto;
  }
`

export default function SubmitButton({
  onClick,
  maxWidth,
  boldText,
  children,
}) {
  return (
    <SubmitButtonContainer maxWidth={maxWidth}>
      <Button onClick={onClick} boldText={boldText}>
        {children}
      </Button>
    </SubmitButtonContainer>
  )
}
