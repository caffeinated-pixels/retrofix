import styled from 'styled-components'
import { navSliderBorderBottom } from '../styles/style-constants'

const NavSlider = styled.div`
  position: absolute;
  width: 250px;
  top: 50px;
  bottom: 0;
  left: 0;

  background-color: #000;
  color: gray;
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
`

const NavLi = styled.li``

export default function NavSliderPanel() {
  return (
    <NavSlider>
      <NavPrimary>
        <NavUserLi>Dave</NavUserLi>
        <NavLi>Sign out of Netflix</NavLi>
      </NavPrimary>
      <NavSecondary>
        <NavLi>Home</NavLi>
        <NavLi>Film</NavLi>
        <NavLi>Series</NavLi>
      </NavSecondary>
    </NavSlider>
  )
}
