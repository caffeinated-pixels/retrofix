import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
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

  @media (min-width: 750px) {
    border-top: ${({ borderOnlyOnMobile }) => (borderOnlyOnMobile ? '0' : '')};
  }
`
const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 0.8125rem;
`

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const TopText = styled.p`
  margin: 0 0 30px;
  font-size: 1rem;
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

const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

const BottomText = styled.p`
  margin-top: 1.5em;
`

const CreditText = styled.p`
  text-align: center;
  margin-top: 2em;
`

const CreditLink = styled(Link)`
  font-weight: 700;
`

const FaIcon = styled.i``

export default function Footer({
  footerContent,
  increasedPadding,
  bgColor,
  borderTop,
  borderOnlyOnMobile,
}) {
  const listItems = footerContent.body.map((item, i) => (
    <ListItem key={i}>
      <Link to='#'>{item}</Link>
    </ListItem>
  ))

  return (
    <FooterContainer
      increasedPadding={increasedPadding}
      bgColor={bgColor}
      borderTop={borderTop}
      borderOnlyOnMobile={borderOnlyOnMobile}
    >
      <FooterWrapper>
        <ContentWrapper>
          <TopText>{footerContent.title}</TopText>
          <UnorderedList>{listItems}</UnorderedList>
          {footerContent.bottomText ? (
            <BottomText>{footerContent.bottomText}</BottomText>
          ) : null}
          <CreditText>
            Coded by{' '}
            <CreditLink to='https://steviegill-webportfolio.netlify.app/'>
              Stevie Gill
            </CreditLink>{' '}
            |{' '}
            <FaIcon className='fab fa-github-square' aria-label='Github logo' />{' '}
            <CreditLink to='https://github.com/caffeinated-pixels/retrofix'>
              Repo
            </CreditLink>
          </CreditText>
        </ContentWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}
