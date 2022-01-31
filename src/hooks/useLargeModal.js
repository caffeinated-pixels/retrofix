import { useState } from 'react'

export default function useLargeModal() {
  const [displayModal, setDisplayModal] = useState(false)

  const handleShowModal = () => {
    setDisplayModal(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setDisplayModal(true)
    }
  }

  const handleCloseModal = (e) => {
    e?.stopPropagation()
    // if the event object exists, we need to stop event bubbling up to Container & calling handleShowModal()

    setDisplayModal(false)
  }

  return { displayModal, handleShowModal, handleKeyDown, handleCloseModal }
}
