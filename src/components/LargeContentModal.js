import { useEffect } from 'react'
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
  z-index: 100;
`
const ModalContainer = styled.div`
  background-color: ${colors.bgBrowseDarkGrey};
  background-color: #181818;
  width: min(98%, 1100px);
  border-radius: 6px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.75);

  animation: open 0.5s ease-in;

  @keyframes open {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`

const Header = styled.div`
  position: relative;
  height: 50vh;
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
  width: 70%;
  margin-left: 3em;
  margin-bottom: 3em;
`

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5em;
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
  line-height: 1;
`

const CloseIcon = styled.i`
  font-size: 1.3rem;
`

const DetailsContainer = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 3em;
`

const LeftDetailsBox = styled.div`
  margin-bottom: 3em;
  width: 70%;
`

const MetaDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const MatchScore = styled.div`
  color: #46d369;
  font-weight: 700;
`

const Metadata = styled.div``

const MaturityRating = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  padding: 0.1em 0.4em;
  line-height: 1;
`
const Resolution = styled(MaturityRating)`
  border-radius: 3px;
  font-size: 0.65rem;
`

const Synopsis = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 1em;
`

const RightDetailsBox = styled.div`
  width: 30%;
  line-height: 22px;
`

const People = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1em;
  margin-right: 0.5em;

  &::before {
    content: '${({ firstWord }) => firstWord}';
    color: #777;
  }
`

export default function LargeContentModal({ handleCloseModal, item }) {
  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/large.jpg`

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseModal()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleCloseModal])

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
        <DetailsContainer>
          <LeftDetailsBox>
            <MetaDataContainer>
              <MatchScore>157% Match</MatchScore>
              <Metadata>{item.year}</Metadata>
              <MaturityRating>TV-{item.maturity}</MaturityRating>
              <Metadata>{item.length}</Metadata>
              <Resolution>64K</Resolution>
            </MetaDataContainer>
            <Synopsis>{item.description}</Synopsis>
          </LeftDetailsBox>
          <RightDetailsBox>
            {item.director && (
              <People firstWord='Director: '>{item.director}</People>
            )}
            {item.cast && <People firstWord='Cast: '>{item.cast}</People>}
            {item.cast && (
              <People firstWord='Genres: '>
                {item.genre}
                {item.subgenres ? `, ${item.subgenres}` : ''}
              </People>
            )}
          </RightDetailsBox>
        </DetailsContainer>
      </ModalContainer>
    </Background>,
    modalRoot
  )
}
