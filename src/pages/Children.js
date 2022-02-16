import { SemanticHeader } from '../containers'
import { RegNavbar } from '../parts'
import { HOME } from '../constants/routes'
import { pageNotFound } from '../components/'

const {
  PageBackground,
  MainContainer,
  MessageContainer,
  HomeLink,
  Title,
  Message,
} = pageNotFound

export default function Children() {
  return (
    <PageBackground bgImage='/images/films/horror/Halloween/large.jpg'>
      <SemanticHeader>
        <RegNavbar noBorder />
      </SemanticHeader>
      <MainContainer>
        <MessageContainer>
          <Title>No kids profiles!</Title>
          <Message>
            Children are as evil as pineapple on a pizza, so RetroFix is a
            no-kids zone!
          </Message>
          <HomeLink to={HOME}>RetroFix Home</HomeLink>
        </MessageContainer>
      </MainContainer>
    </PageBackground>
  )
}
