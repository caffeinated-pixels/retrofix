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
  background: transparent;
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

const SearchIcon = styled.i`
  font-size: 1rem;
`

const SearchInput = styled.input`
  box-sizing: content-box;
  width: 6em;
  padding: 4px 0.5em;
  border: 1px solid #ccc;

  color: #fff;
  background-color: transparent;
`

const BellIcon = styled.i`
  font-size: 1rem;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
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

BrowseHeader.BellIcon = ({ ...restProps }) => {
  return <BellIcon className='fas fa-bell' {...restProps} />
}

BrowseHeader.Avatar = ({ src, ...restProps }) => {
  return <Avatar src={src} {...restProps} />
}
