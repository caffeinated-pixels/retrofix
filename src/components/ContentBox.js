import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Container = styled.div`
  /* position: relative; */
  min-width: min(24%, 300px);
  padding: 0 0.2vw;
  cursor: pointer;

  transition: all 250ms;

  &:hover,
  &:focus-visible {
    transform: scale(0.98);
    filter: brightness(0.5);
  }
`
const ContentImage = styled.img`
  object-fit: cover;
`

const Modal = styled.div`
  background-color: ${colors.bgBrowseDarkGrey};
  background-color: grey;

  position: absolute;
  width: 332px;
  height: 374px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  z-index: 9999;
`

export default function ContentBox({ item }) {
  const [displayModal, setDisplayModal] = useState(false)

  return (
    <Container
      tabIndex='0'
      // onMouseEnter={() => setDisplayModal(true)}
      displayModal={displayModal}
    >
      <ContentImage
        src={`/images/${item.category}/${item.genre}/${item.slug}/small.jpg`}
        alt={item.title}
      />
      {displayModal && (
        <Modal onMouseLeave={() => setDisplayModal(false)}>I am a modal</Modal>
      )}
    </Container>
  )
}
