import styled from 'styled-components'
import useLargeModal from '../hooks/useLargeModal'
import { LargeContentModal } from './'

const Container = styled.div`
  /* position: relative; */
  min-width: min(24%, 300px);
  padding: 0 0.2vw;

  cursor: pointer;

  transition: all 250ms;
`
const ContentImage = styled.img`
  object-fit: cover;

  &:hover,
  &:focus-visible {
    transform: scale(0.98);
    filter: brightness(0.5);
  }

  &:focus-visible {
    outline: auto;
  }
`

export default function ContentSlide({ item }) {
  const { displayModal, handleShowModal, handleKeyDown, handleCloseModal } =
    useLargeModal()
  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/thumb.jpg`

  return (
    <Container onClick={handleShowModal} displayModal={displayModal}>
      <ContentImage
        tabIndex='0'
        src={imgUrl}
        alt={item.title}
        onKeyDown={handleKeyDown}
      />
      {displayModal && (
        <LargeContentModal handleCloseModal={handleCloseModal} item={item} />
      )}
    </Container>
  )
}
