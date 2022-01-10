import { useState } from 'react'
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
const DropDownIcon = styled.i`
  margin-left: 10px;
`

export default function NavDropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsDropDownOpen((prevState) => !prevState)
    }
  }

  return (
    <DropDownWrapper
      tabIndex='0'
      onMouseEnter={() => setIsDropDownOpen(true)}
      onMouseLeave={() => setIsDropDownOpen(false)}
      onKeyDown={handleKeyDown}
    >
      <Avatar src='./images/users/1.png' />
      <DropDownIcon
        className={isDropDownOpen ? 'fas fa-caret-down' : 'fas fa-caret-up'}
      />
    </DropDownWrapper>
  )
}
