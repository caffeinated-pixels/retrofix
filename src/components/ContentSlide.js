import { useState } from 'react'
import styled from 'styled-components'
import { LargeContentModal } from './'

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

  &:focus-visible {
    outline: 0;
  }
`
const ContentImage = styled.img`
  object-fit: cover;
`

export default function ContentSlide({ item }) {
  const [displayModal, setDisplayModal] = useState(false)
  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/small.jpg`

  const handleShowModal = () => {
    setDisplayModal(true)
  }
  const handleCloseModal = (e) => {
    e?.stopPropagation()
    // if the event object exists, we need to stop event bubbling up to Container & calling handleShowModal()

    setDisplayModal(false)
  }

  return (
    <Container
      tabIndex='0'
      onClick={handleShowModal}
      displayModal={displayModal}
    >
      <ContentImage src={imgUrl} alt={item.title} />
      {displayModal && (
        <LargeContentModal
          handleCloseModal={handleCloseModal}
          imgUrl={imgUrl}
          item={item}
        />
      )}
    </Container>
  )
}
