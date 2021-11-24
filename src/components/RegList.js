import styled from 'styled-components'

const RegList = styled.ul`
  margin: 25px 0 44px;
  margin: ${({ planform }) => (planform ? '4px 0 20px' : '25px 0 44px')};
  font-size: 1.0625rem;
  font-size: ${({ planform }) => (planform ? '1rem' : '1.0625rem')};
  padding-left: 1.2em;
`

RegList.Item = styled.li`
  padding-left: 0.75em;
  text-align: left;

  &::marker {
    color: red;
    content: '\f00c';
    font-size: 1.5rem;
    font-size: ${({ planform }) => (planform ? '1rem' : '1.5rem')};
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
  }

  & + & {
    margin-top: ${({ planform }) => (planform ? '8px' : '20px')};
  }
`
export default RegList
