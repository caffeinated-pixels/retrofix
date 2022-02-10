import { memo } from 'react'

import styled from 'styled-components'
import useLargeModal from '../hooks/useLargeModal'
import { LargeContentModal } from './'

const Container = styled.div`
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

function ContentSlide({ item, isSlideOnCurrentPage }) {
  const { displayModal, handleShowModal, handleKeyDown, handleCloseModal } =
    useLargeModal()
  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/thumb.jpg`

  const tabIndex = isSlideOnCurrentPage ? '0' : '-1'

  return (
    <Container onClick={handleShowModal} displayModal={displayModal}>
      <ContentImage
        tabIndex={tabIndex}
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

// memoize ContentSlide to prevent unnecessary rerenders everytime window resizes (via SlideTrack)
export default memo(ContentSlide)
