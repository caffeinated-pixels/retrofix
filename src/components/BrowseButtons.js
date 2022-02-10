import styled from 'styled-components'
import { colors } from '../styles/style-constants'

export const PlayButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 24px 8px 20px;
  margin-right: 1rem;
  background-color: ${colors.playButtonWhite};
  color: #000;

  &:hover {
    background-color: ${colors.playButtonHover};
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const PlayIcon = styled.i`
  margin-right: 1rem;
`

export const MoreInfoButton = styled(PlayButton)`
  color: white;
  background-color: ${colors.moreInfoButtonGrey};

  &:hover {
    background-color: ${colors.moreInfoButtonHover};
  }
`

export const InfoIcon = styled(PlayIcon)``
