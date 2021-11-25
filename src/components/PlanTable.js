import styled from 'styled-components'

const Table = styled.table`
  padding-bottom: 10px;
  border: 1px solid red;
  display: flex;
`

const HiddenTableCaption = styled.caption`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

const TableBody = styled.tbody``

const TableRow = styled.tr``

const TableCell = styled.td``

const FaCheckmark = styled.i``

export default function PlanTable() {
  return (
    <Table>
      <HiddenTableCaption>Netflix Plan Features</HiddenTableCaption>
      <TableBody>
        <TableRow>
          <TableCell>Monthly price</TableCell>
          <TableCell>$9.99</TableCell>
          <TableCell>$14.99</TableCell>
          <TableCell>$18.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Video quality</TableCell>
          <TableCell>Good</TableCell>
          <TableCell>Better</TableCell>
          <TableCell>Best</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Resolution</TableCell>
          <TableCell>480p</TableCell>
          <TableCell>1080p</TableCell>
          <TableCell>4K+HDR</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Watch on your TV, computer, mobile phone and tablet
          </TableCell>
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
