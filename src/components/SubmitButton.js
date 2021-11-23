import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { colors, focusOutline } from '../styles/style-constants'

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
  letter-spacing: 0.025rem;

  border-radius: 2px;

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: ${focusOutline};
  }
`

export default function SubmitButton({ route, maxWidth, children }) {
  const navigate = useNavigate()

  const nextPage = () => {
    navigate(route)
  }

  return (
    <SubmitButtonContainer maxWidth={maxWidth}>
      <Button onClick={nextPage}>{children}</Button>
    </SubmitButtonContainer>
  )
}
