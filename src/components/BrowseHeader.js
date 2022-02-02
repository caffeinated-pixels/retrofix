import styled from 'styled-components'

export const Container = styled.div``

export const Navbar = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100vw;
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

export const BurgerButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin-right: 20px;
`

export const BurgerButtonIcon = styled.img`
  width: 24px;
  width: 24px;
`

export const LogoWrapperMobile = styled.div`
  width: 84px;
  height: 24px;
`
export const LogoWrapperDesktop = styled.div`
  width: 64.75px;
  height: 17.5px;
`

export const NavPrimary = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
`

export const NavPrimaryItem = styled.li`
  margin-left: 20px;
  font-size: 0.875rem;
`
export const NavPrimaryBtn = styled(BurgerButton)`
  margin: 0;
  color: #e5e5e5;
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
  font-size: ${({ isActive }) => (isActive ? '0.975rem' : 'inherit')};
  transition: color 0.4s;

  &:hover {
    color: #b3b3b3;
  }
`

export const NavSecondary = styled(NavPrimary)`
  margin-left: auto;
`
export const NavSecondaryItem = styled.li`
  margin-left: 20px;
  font-size: 0.875rem;
`

export const SearchForm = styled.form`
  margin-left: auto;
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ isSearchOpen }) => (isSearchOpen ? '1px solid #ccc' : '0')};
  padding: 0.1em 0.4em;
`

export const OpenSearchButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: inherit;
`

export const SearchIcon = styled.i`
  font-size: 0.8125rem;
`

export const SearchInput = styled.input`
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

export const SearchInputDesktop = styled(SearchInput)`
  transition: width 0.4s;
  width: ${({ isSearchOpen }) => (isSearchOpen ? '12em' : '0em')};
  visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'show' : 'hidden')};

  padding: 4px 0.5em;
  padding: ${({ isSearchOpen }) => (isSearchOpen ? '4px 0.5em' : '0')};
  border: 0;
`

export const BellIcon = styled.i`
  font-size: 1rem;
`
