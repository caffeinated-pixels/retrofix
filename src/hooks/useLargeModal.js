import { useState } from 'react'

export default function useLargeModal() {
  const [displayModal, setDisplayModal] = useState(false)

  const handleShowModal = () => {
    setDisplayModal(true)
  }

  const handleKeyDown = (e) => {
    // add delay to stop Play button also being activated!
    setTimeout(() => {
      if (e.key === 'Enter') {
        setDisplayModal(true)
      }
    }, 10)
  }

  const handleCloseModal = (e) => {
    e?.stopPropagation()
    // if the event object exists, we need to stop event bubbling up to Container & calling handleShowModal()

    setDisplayModal(false)
  }

  return { displayModal, handleShowModal, handleKeyDown, handleCloseModal }
}
