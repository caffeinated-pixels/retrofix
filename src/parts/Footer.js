import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const FooterContainer = styled.footer`
  color: ${colors.textMedGrey};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : null)};
  border-top: ${({ borderTop }) =>
    borderTop ? `1px solid ${borderTop}` : null};

  padding: ${({ increasedPadding }) =>
    increasedPadding ? '50px 5%' : '30px 0'};
  line-height: normal;

  @media (min-width: 550px) {
    padding: 75px 45px;
    padding: ${({ increasedPadding }) =>
      increasedPadding ? '75px 45px' : '30px 0'};
  }
`
const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const TopText = styled.p`
  margin: 0 0 30px;
`

const UnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 1000px;
  font-size: 13px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 740px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  min-width: 100px;
  padding-right: 12px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

const BottomText = styled.p`
  font-size: 13px;
  margin-top: 24px;
`

export default function Footer({
  footerContent,
  increasedPadding,
  bgColor,
  borderTop,
}) {
  const listItems = footerContent.body.map((item, i) => (
    <ListItem key={i}>
      <Link href='#'>{item}</Link>
    </ListItem>
  ))

  return (
    <FooterContainer
      increasedPadding={increasedPadding}
      bgColor={bgColor}
      borderTop={borderTop}
    >
      <FooterWrapper>
        <ContentWrapper>
          <TopText>{footerContent.title}</TopText>
          <UnorderedList>{listItems}</UnorderedList>
          {footerContent.bottomText ? (
            <BottomText>{footerContent.bottomText}</BottomText>
          ) : null}
        </ContentWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}
