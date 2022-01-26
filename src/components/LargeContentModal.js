import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { browseButtons } from '.'
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

  display: flex;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #181818, transparent 50%);
  }
`

const TitleBox = styled.div`
  align-self: flex-end;
  z-index: 10;
  width: 60%;
  margin-left: 3em;
  margin-bottom: 3em;
`

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1em;
`

const ButtonWrapper = styled.div``

const RoundButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;

  font-size: 0.75rem;

  cursor: pointer;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(42, 42, 42, 0.6);
  color: #fff;
  margin-right: 0.5em;

  &:hover {
    border-color: #fff;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

const RoundButtonIcon = styled.i``

const CloseButton = styled.button`
  align-self: flex-start;
  z-index: 10;
  width: 36px;
  height: 36px;

  border: 0;
  border-radius: 50%;

  background-color: #181818;
  color: #fff;

  cursor: pointer;
  margin-top: 1.25em;
  margin-right: 1.25em;
`

const CloseIcon = styled.i`
  font-size: 1.3rem;
`

export default function LargeContentModal({ handleCloseModal, imgUrl, item }) {
  return ReactDOM.createPortal(
    <Background>
      <ModalContainer>
        <Header imgUrl={imgUrl}>
          <TitleBox>
            <Title>{item.title}</Title>
            <ButtonWrapper>
              <browseButtons.PlayButton autoFocus>
                <browseButtons.PlayIcon className='fas fa-play' />
                Play
              </browseButtons.PlayButton>
              <RoundButton aria-label='Rate thumbs up'>
                <RoundButtonIcon className='fas fa-thumbs-up' />
              </RoundButton>
              <RoundButton aria-label='Rate thumbs down'>
                <RoundButtonIcon className='fas fa-thumbs-down' />
              </RoundButton>
            </ButtonWrapper>
          </TitleBox>
          <CloseButton aria-label='close' onClick={handleCloseModal}>
            <CloseIcon className='fas fa-times' />
          </CloseButton>
        </Header>
      </ModalContainer>
    </Background>,
    modalRoot
  )
}
