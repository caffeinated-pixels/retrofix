import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const modalRoot = document.getElementById('modal-root')

const Container = styled.div`
  background-color: grey;
  background-color: ${colors.bgBrowseDarkGrey};

  position: absolute;
  width: 80%;
  height: 374px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
`

export default function LargeContentModal({ handleCloseModal }) {
  return ReactDOM.createPortal(
    <Container onClick={handleCloseModal}></Container>,
    modalRoot
  )
}
