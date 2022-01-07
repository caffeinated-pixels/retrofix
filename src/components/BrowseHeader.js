import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const Navbar = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0 20px;
  background: black;
`
const BurgerButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin-right: 20px;
`

const BurgerButtonIcon = styled.img`
  width: 24px;
  width: 24px;
`

const LogoWrapper = styled.div`
  width: 84px;
  height: 24px;
`

const SearchForm = styled.form`
  margin-left: auto;
`

const SearchInput = styled.input`
  box-sizing: content-box;
  width: 6em;
  padding: 4px 0.5em;
  border: 1px solid #ccc;

  color: #fff;
  background-color: transparent;
`

export default function BrowseHeader({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

BrowseHeader.Navbar = ({ children, ...restProps }) => {
  return <Navbar {...restProps}>{children}</Navbar>
}

BrowseHeader.BurgerButton = ({ children, ...restProps }) => {
  return <BurgerButton {...restProps}>{children}</BurgerButton>
}

BrowseHeader.BurgerButtonIcon = ({ children, ...restProps }) => {
  return <BurgerButtonIcon {...restProps}>{children}</BurgerButtonIcon>
}

BrowseHeader.LogoWrapper = ({ children, ...restProps }) => {
  return <LogoWrapper {...restProps}>{children}</LogoWrapper>
}

BrowseHeader.SearchForm = ({ children, ...restProps }) => {
  return <SearchForm {...restProps}>{children}</SearchForm>
}

BrowseHeader.SearchInput = ({ children, ...restProps }) => {
  return <SearchInput {...restProps}>{children}</SearchInput>
}
