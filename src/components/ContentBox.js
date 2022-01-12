import styled from 'styled-components'

const Container = styled.div`
  min-width: min(100vw * 0.23, 300px);
  margin-right: min(5px, 0.4vw);
  cursor: pointer;
`
const ContentImage = styled.img`
  object-fit: cover;
`

export default function ContentBox({ item }) {
  return (
    <Container>
      <ContentImage
        src={`/images/${item.category}/${item.genre}/${item.slug}/small.jpg`}
        alt={item.title}
      />
    </Container>
  )
}
