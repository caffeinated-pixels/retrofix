import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 56.25vw;
  background-color: grey;

  background-image: url('./images/misc/joker1.jpg');
  background-size: cover;
  background-position: center;
`

export default function Billboard() {
  return <Container></Container>
}
