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

export default function PageNotFound() {
  return (
    <PageBackground>
      <SemanticHeader>
        <RegNavbar noBorder />
      </SemanticHeader>
      <MainContainer>
        <MessageContainer>
          <Title>
            No more website! <br /> Where you going, pal?!
          </Title>
          <Message>
            Next time you have the chance to visit RetroFix, don't hesitate!
          </Message>
          <HomeLink to={HOME}>RetroFix Home</HomeLink>
        </MessageContainer>
      </MainContainer>
    </PageBackground>
  )
}
