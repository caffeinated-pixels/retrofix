import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Container = styled.div`
  position: relative;
  min-width: min(100vw * 0.23, 300px);
  margin-right: min(5px, 0.4vw);
  cursor: pointer;
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
