import styled from 'styled-components'
import { colors, navSliderBorderBottom } from '../styles/style-constants'

const NavSlider = styled.div`
  position: absolute;
  width: 250px;
  top: 50px;
  bottom: 0;
  left: 0;
  z-index: 99;
  transform: translateX(-250px);
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(0)' : 'translateX(-250px)'};
  transition: transform 150ms cubic-bezier(0.5, 0, 0.1, 1);
  /* visibility: hidden; */

  background-color: #000;
  color: ${colors.textLightGrey};
  font-weight: 700;
`

const NavPrimary = styled.ul`
  list-style: none;
  padding: 10px 0 10px 20px;
  border-bottom: ${navSliderBorderBottom};
  margin-bottom: 5px;
`
const NavSecondary = styled.ul`
  list-style: none;
  padding-left: 20px;
  line-height: 2;
`

const NavUserLi = styled.li`
  color: #fff;
  margin-bottom: 10px;
`
const NavUserTextWrapper = styled.div`
  margin-left: 8px;
`

const NavUserTextTop = styled.p`
  line-height: 1;
`

const NavUserTextBottom = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${colors.textLightGrey};
  line-height: 1;
`

const UserAvatar = styled.img`
  display: inline-block;
  width: 2em;
  vertical-align: middle;
`

const NavLi = styled.li``

const NavBtn = styled.button`
  display: flex;
  border: 0;

  width: 100%;
  padding: 0;

  cursor: pointer;

  text-align: left;
  background: none;
  color: inherit;
`

export default function NavSliderPanel({ isMenuOpen }) {
  return (
    <NavSlider isMenuOpen={isMenuOpen}>
      <NavPrimary>
        <NavUserLi>
          <NavBtn>
            <UserAvatar src='./images/users/1.png' />
            <NavUserTextWrapper>
              <NavUserTextTop>Andrea</NavUserTextTop>
              <NavUserTextBottom>Switch Profiles</NavUserTextBottom>
            </NavUserTextWrapper>
          </NavBtn>
        </NavUserLi>
        <NavLi>
          <NavBtn>Sign out of Netflix</NavBtn>
        </NavLi>
      </NavPrimary>
      <NavSecondary>
        <NavLi>
          <NavBtn>Home</NavBtn>
        </NavLi>
        <NavLi>
          <NavBtn>Film</NavBtn>
        </NavLi>
        <NavLi>
          <NavBtn>Series</NavBtn>
        </NavLi>
      </NavSecondary>
    </NavSlider>
  )
}
