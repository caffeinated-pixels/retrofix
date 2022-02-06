import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Table = styled.table`
  padding-bottom: 10px;

  display: flex;
  border-collapse: collapse;
  text-align: center;
`

const HiddenTableCaption = styled.caption`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

const TableBody = styled.tbody`
  display: flex;
  flex-wrap: wrap;
`

const TableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  position: relative;

  & + &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.borderMedLightGrey};
  }
`

const RowHeader = styled.th`
  width: 100%;
  min-height: 37px;
  padding: 16px 8px 4px;

  color: ${colors.textDarkGrey};
  font-size: 0.8125rem;
  font-weight: 400;

  @media (min-width: 600px) {
    width: 40%;
    min-height: 60px;

    text-align: left;
    font-size: 1rem;
    padding: 12px 16px;

    display: flex;
    align-items: center;
  }
`

const TableCell = styled.td`
  min-height: 37px;
  width: calc(100% / 3);
  padding: 8px;

  color: ${colors.textMedGrey};
  font-weight: 700;

  @media (min-width: 600px) {
    width: calc(60% / 3);
    min-height: 60px;
    padding: 12px 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-of-type(${({ typeNum }) => typeNum}) {
    color: ${colors.netflixRedFocus};
  }
`

const FaCheckmark = styled.i`
  font-size: 1.5rem;
`

export default function PlanTable({ selectedPlan }) {
  const typeNum =
    selectedPlan === 'basic' ? '1' : selectedPlan === 'standard' ? '2' : '3'

  return (
    <Table>
      <HiddenTableCaption>Netflix Plan Features</HiddenTableCaption>
      <TableBody>
        <TableRow>
          <RowHeader>Monthly price</RowHeader>
          <TableCell typeNum={typeNum}>$59.99</TableCell>
          <TableCell typeNum={typeNum}>$149.99</TableCell>
          <TableCell typeNum={typeNum}>$666.66</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>Video quality</RowHeader>
          <TableCell typeNum={typeNum}>Garbage</TableCell>
          <TableCell typeNum={typeNum}>Adequate</TableCell>
          <TableCell typeNum={typeNum}>Uber</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>Resolution</RowHeader>
          <TableCell typeNum={typeNum}>256p</TableCell>
          <TableCell typeNum={typeNum}>480p</TableCell>
          <TableCell typeNum={typeNum}>64K+4D</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>
            Watch on your TV, computer, mobile phone and tablet
          </RowHeader>
          <TableCell aria-label='included' typeNum={typeNum}>
            <FaCheckmark className='fas fa-times'></FaCheckmark>
          </TableCell>
          <TableCell aria-label='included' typeNum={typeNum}>
            <FaCheckmark className='fas fa-times'></FaCheckmark>
          </TableCell>
          <TableCell aria-label='included' typeNum={typeNum}>
            <FaCheckmark className='fas fa-times'></FaCheckmark>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
