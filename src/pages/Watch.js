import styled from 'styled-components'

const VideoPlayer = styled.video`
  display: block;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`

export default function Watch() {
  return (
    <>
      <VideoPlayer
        controls
        src='/videos/chaos-engine.mp4'
        poster='/images/misc/chaos-engine.png'
        autoPlay
      >
        Sorry, your browser doesn't support embedded videos.
      </VideoPlayer>
    </>
  )
}
