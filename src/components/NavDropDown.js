import styled from 'styled-components'

const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`
const ChevronIcon = styled.i`
  margin-left: 10px;
`

export default function NavDropDown() {
  return (
    <DropDownWrapper>
      <Avatar src='./images/users/1.png' />
      <ChevronIcon className='fas fa-caret-up' />
    </DropDownWrapper>
  )
}
