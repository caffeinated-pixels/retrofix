import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import firebaseSignOut from '../firebase/firebaseSignOut'
import { HOME } from '../constants/routes'
import { colors, navSliderBorderBottom } from '../styles/style-constants'

const NavSliderBackground = styled.div`
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
`

const NavSlider = styled.div`
  position: fixed;
  width: 250px;
  top: 50px;
  bottom: 0;
  left: 0;
  transform: translateX(-250px);
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(0)' : 'translateX(-250px)'};
  transition: transform 150ms cubic-bezier(0.5, 0, 0.1, 1);

  background-color: #000;
  z-index: 99;
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
  padding-left: 0;
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

const NavLi = styled.li`
  padding-left: ${({ noLeftPadding }) => (noLeftPadding ? '0' : '20px')};
  color: ${({ isActive }) => (isActive ? 'white' : '')};
  border-left: ${({ isActive }) =>
    isActive ? '3px solid #b9090b' : '3px solid #000'};
`

const NavBtn = styled.button`
  display: flex;
  border: 0;

  width: 100%;
  padding: 0;

  cursor: pointer;

  text-align: left;
  background: none;
  color: inherit;

  &:hover,
  &:hover p,
  &:focus-visible,
  &:focus-visible p {
    color: #fff;
  }
`

// function that sets button as active
// manage with state

export default function NavSliderPanel({ isMenuOpen }) {
  const [activeCategory, setActiveCategory] = useState('home')

  const navigate = useNavigate()

  const signOut = async () => {
    await firebaseSignOut()
    console.log('signed out!')
    navigate(HOME)
  }

  const setCategory = (category) => {
    setActiveCategory(category)
  }

  return (
    <>
      <NavSliderBackground isMenuOpen={isMenuOpen}></NavSliderBackground>
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
          <NavLi noLeftPadding>
            <NavBtn onClick={signOut}>Sign out of Netflix</NavBtn>
          </NavLi>
        </NavPrimary>
        <NavSecondary>
          <NavLi isActive={activeCategory === 'home'}>
            <NavBtn onClick={() => setCategory('home')}>Home</NavBtn>
          </NavLi>
          <NavLi isActive={activeCategory === 'film'}>
            <NavBtn onClick={() => setCategory('film')}>Film</NavBtn>
          </NavLi>
          <NavLi isActive={activeCategory === 'series'}>
            <NavBtn onClick={() => setCategory('series')}>Series</NavBtn>
          </NavLi>
        </NavSecondary>
      </NavSlider>
    </>
  )
}
