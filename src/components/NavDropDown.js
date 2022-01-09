import styled from 'styled-components'

const DropDownWrapper = styled.div``

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`

export default function NavDropDown() {
  return (
    <DropDownWrapper>
      <Avatar src='./images/users/1.png' />
    </DropDownWrapper>
  )
}
