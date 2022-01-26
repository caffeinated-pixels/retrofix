import styled from 'styled-components'

export const PlayButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 24px 8px 20px;
  margin-right: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const PlayIcon = styled.i`
  margin-right: 1rem;
`

export const MoreInfoButton = styled(PlayButton)`
  color: white;
  background-color: rgba(109, 109, 110, 0.7);

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`

export const InfoIcon = styled(PlayIcon)``
