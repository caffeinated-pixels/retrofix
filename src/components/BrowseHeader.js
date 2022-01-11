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
  padding: ${({ padding }) => (padding ? padding : '0 20px')};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
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

const LogoWrapperMobile = styled.div`
  width: 84px;
  height: 24px;
`
const LogoWrapperDesktop = styled.div`
  width: 64.75px;
  height: 17.5px;
`

const NavPrimary = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
`

const NavPrimaryItem = styled.li`
  margin-left: 20px;
  font-size: 0.875rem;
`
const NavPrimaryBtn = styled(BurgerButton)`
  margin: 0;
  color: inherit;
  transition: color 0.4s;

  &:hover {
    color: #b3b3b3;
  }
`

const NavSecondary = styled(NavPrimary)`
  margin-left: auto;
`
const NavSecondaryItem = styled.li`
  margin-left: 20px;
  font-size: 0.875rem;
`

const SearchForm = styled.form`
  margin-left: auto;
`
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ isSearchOpen }) => (isSearchOpen ? '1px solid #ccc' : '0')};
  padding: 0.1em 0.4em;
`

const SearchIcon = styled.i`
  font-size: 0.8125rem;
  cursor: pointer;
`

const SearchInput = styled.input`
  box-sizing: content-box;
  width: 6em;

  padding: 4px 0.5em;
  border: 1px solid #ccc;

  color: #fff;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
`

const SearchInputDesktop = styled(SearchInput)`
  transition: width 0.4s;
  width: ${({ isSearchOpen }) => (isSearchOpen ? '12em' : '0em')};
  visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'show' : 'hidden')};

  padding: 4px 0.5em;
  padding: ${({ isSearchOpen }) => (isSearchOpen ? '4px 0.5em' : '0')};
  border: 0;
`

const BellIcon = styled.i`
  font-size: 1rem;
`
export default function BrowseHeader({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

BrowseHeader.Navbar = ({ children, padding, ...restProps }) => {
  return (
    <Navbar padding={padding} {...restProps}>
      {children}
    </Navbar>
  )
}

BrowseHeader.BurgerButton = ({ children, ...restProps }) => {
  return <BurgerButton {...restProps}>{children}</BurgerButton>
}

BrowseHeader.BurgerButtonIcon = ({ children, ...restProps }) => {
  return <BurgerButtonIcon {...restProps}>{children}</BurgerButtonIcon>
}

BrowseHeader.LogoWrapperMobile = ({ children, ...restProps }) => {
  return <LogoWrapperMobile {...restProps}>{children}</LogoWrapperMobile>
}

BrowseHeader.LogoWrapperDesktop = ({ children, ...restProps }) => {
  return <LogoWrapperDesktop {...restProps}>{children}</LogoWrapperDesktop>
}

BrowseHeader.NavPrimary = ({ children, ...restProps }) => {
  return <NavPrimary {...restProps}>{children}</NavPrimary>
}

BrowseHeader.NavPrimaryItem = ({ children, ...restProps }) => {
  return <NavPrimaryItem {...restProps}>{children}</NavPrimaryItem>
}

BrowseHeader.NavPrimaryBtn = ({ children, ...restProps }) => {
  return <NavPrimaryBtn {...restProps}>{children}</NavPrimaryBtn>
}

BrowseHeader.NavSecondary = ({ children, ...restProps }) => {
  return <NavSecondary {...restProps}>{children}</NavSecondary>
}

BrowseHeader.NavSecondaryItem = ({ children, ...restProps }) => {
  return <NavSecondaryItem {...restProps}>{children}</NavSecondaryItem>
}

BrowseHeader.SearchWrapper = ({ children, ...restProps }) => {
  return <SearchWrapper {...restProps}>{children}</SearchWrapper>
}

BrowseHeader.SearchIcon = ({ children, ...restProps }) => {
  return (
    <SearchIcon className='fas fa-search' {...restProps}>
      {children}
    </SearchIcon>
  )
}

BrowseHeader.SearchForm = ({ children, ...restProps }) => {
  return <SearchForm {...restProps}>{children}</SearchForm>
}

BrowseHeader.SearchInput = ({ children, ...restProps }) => {
  return <SearchInput {...restProps}>{children}</SearchInput>
}

BrowseHeader.SearchInputDesktop = ({
  children,
  isSearchOpen,
  ...restProps
}) => {
  return (
    <SearchInputDesktop isSearchOpen={isSearchOpen} {...restProps}>
      {children}
    </SearchInputDesktop>
  )
}

BrowseHeader.BellIcon = ({ ...restProps }) => {
  return <BellIcon className='fas fa-bell' {...restProps} />
}
