import { useState } from 'react'
import styled from 'styled-components'

const DropDownWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`
const AvatarWrapper = styled.div`
  position: relative;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`

const CalloutIcon = styled.i`
  display: ${({ isDropDownOpen }) => (isDropDownOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;

  line-height: 1.5;
  text-align: center;
  font-size: 1.2rem;
`

const DropDownIcon = styled.i`
  margin-left: 10px;
`

const SubMenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  width: 181px;

  font-size: 0.8125rem;
  background-color: rgba(0, 0, 0, 0.9);
  border: solid 1px rgba(255, 255, 255, 0.15);
`

const SubMenuList = styled.ul`
  list-style: none;
  padding: 0;
`
const SubMenuItem = styled.li``

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
      <AvatarWrapper>
        <Avatar src='./images/users/1.png' />
        <CalloutIcon
          className='fas fa-caret-up'
          isDropDownOpen={isDropDownOpen}
        />
      </AvatarWrapper>

      <DropDownIcon
        className={isDropDownOpen ? 'fas fa-caret-down' : 'fas fa-caret-up'}
      />

      {isDropDownOpen && (
        <SubMenuContainer>
          <SubMenuList>
            <SubMenuItem>Children</SubMenuItem>
            <SubMenuItem>Manage Profiles</SubMenuItem>
          </SubMenuList>
        </SubMenuContainer>
      )}
    </DropDownWrapper>
  )
}
