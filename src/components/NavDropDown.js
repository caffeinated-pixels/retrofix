import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useSignOut from '../hooks/useSignOut'
import styled from 'styled-components'
import { PROFILE } from '../constants/routes'

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
  padding: 10px 0 5px;

  & + & {
    border-top: solid 1px rgba(255, 255, 255, 0.25);
  }
`
const SubMenuItem = styled.li`
  padding: 5px 10px;
`

const SubMenuBtn = styled.button`
  border: 0;
  cursor: pointer;

  background: transparent;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
`

export default function NavDropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const signOut = useSignOut()
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsDropDownOpen((prevState) => !prevState)
    }
  }

  return (
    <DropDownWrapper
      onMouseEnter={() => setIsDropDownOpen(true)}
      onMouseLeave={() => setIsDropDownOpen(false)}
      onClick={() => setIsDropDownOpen((prevState) => !prevState)}
    >
      <AvatarWrapper tabIndex='0' onKeyDown={handleKeyDown}>
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
            <SubMenuItem>
              <SubMenuBtn>
                <Avatar src='./images/users/kids.jpg' />
                Children
              </SubMenuBtn>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuBtn
                onClick={() => {
                  navigate(PROFILE)
                }}
              >
                Manage Profiles
              </SubMenuBtn>
            </SubMenuItem>
          </SubMenuList>

          <SubMenuList>
            <SubMenuItem>
              <SubMenuBtn onClick={signOut}>Sign out of Netflix</SubMenuBtn>
            </SubMenuItem>
          </SubMenuList>
        </SubMenuContainer>
      )}
    </DropDownWrapper>
  )
}
