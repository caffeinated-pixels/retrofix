import styled from 'styled-components'
import { colors } from '../styles/style-constants'

const Table = styled.table`
  padding-bottom: 10px;
  /* border: 1px solid red; */

  display: flex;
  border-collapse: collapse;
  text-align: center;
  /* border-spacing: 0; */
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

const TableCellFeature = styled.td`
  width: 100%;
  min-height: 37px;
  padding: 16px 8px 4px;

  color: ${colors.textDarkGrey};
  font-size: 0.8125rem;
`

const TableCell = styled.td`
  min-height: 37px;
  width: calc(100% / 3);
  padding: 8px;

  color: ${colors.textMedGrey};
  font-weight: 700;
`

const FaCheckmark = styled.i`
  font-size: 1.5rem;
`

export default function PlanTable() {
  return (
    <Table>
      <HiddenTableCaption>Netflix Plan Features</HiddenTableCaption>
      <TableBody>
        <TableRow>
          <TableCellFeature>Monthly price</TableCellFeature>
          <TableCell>$9.99</TableCell>
          <TableCell>$14.99</TableCell>
          <TableCell>$18.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCellFeature>Video quality</TableCellFeature>
          <TableCell>Good</TableCell>
          <TableCell>Better</TableCell>
          <TableCell>Best</TableCell>
        </TableRow>
        <TableRow>
          <TableCellFeature>Resolution</TableCellFeature>
          <TableCell>480p</TableCell>
          <TableCell>1080p</TableCell>
          <TableCell>4K+HDR</TableCell>
        </TableRow>
        <TableRow>
          <TableCellFeature>
            Watch on your TV, computer, mobile phone and tablet
          </TableCellFeature>
          <TableCell>
            <FaCheckmark className='fas fa-check'></FaCheckmark>
          </TableCell>
          <TableCell>
            <FaCheckmark className='fas fa-check'></FaCheckmark>
          </TableCell>
          <TableCell>
            <FaCheckmark className='fas fa-check'></FaCheckmark>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
