import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const modalRoot = document.getElementById('modal-root')

const Background = styled.div`
  background-color: hsla(0, 0%, 0%, 0.7);

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContainer = styled.div`
  background-color: ${colors.bgBrowseDarkGrey};
  background-color: #181818;
  width: min(90%, 950px);
  height: 80%;
  border-radius: 6px;
`

const Header = styled.div`
  position: relative;
  height: 70%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #181818, transparent 50%);
  }
`
export default function LargeContentModal({ handleCloseModal, imgUrl }) {
  return ReactDOM.createPortal(
    <Background onClick={handleCloseModal}>
      <ModalContainer>
        <Header imgUrl={imgUrl}></Header>
      </ModalContainer>
    </Background>,
    modalRoot
  )
}
