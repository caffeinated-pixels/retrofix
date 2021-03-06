import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../styles/style-constants'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`

export const Title = styled.h1`
  font-size: max(1.875rem, 3.5vw);
  font-weight: 400;
`

export const ProfileList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2.5em;
  gap: 2vw;
`

export const ListItem = styled.li`
  list-style: none;
`

const LinkButton = css`
  color: ${colors.textLightGrey};

  &:hover {
    color: #fff;
  }

  &:hover > div::after {
    border-color: white;
  }
`

export const NavLink = styled(Link)`
  ${LinkButton}
  text-decoration: none;
`

export const NavButton = styled.button`
  ${LinkButton}

  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`

export const Avatar = styled.div`
  position: relative;
  background-color: ${colors.textDarkGrey};
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : '')};
  background-size: cover;
  height: clamp(84px, 10vw, 200px);
  width: clamp(84px, 10vw, 200px);
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 4px;
    border: 2px solid transparent;
  }
`

export const ChooseAvatar = styled(Avatar)`
  background-color: transparent;
`

export const Name = styled.p`
  margin: 0.6em 0;
  text-align: center;
  font-size: max(0.75rem, 1.3vw);
`
