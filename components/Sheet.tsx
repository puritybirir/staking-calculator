import { FC, ReactNode } from 'react'
import Column from './Column';
import Row from './Row';
import Cell from './Cell';

interface SheetProps { }

const Sheet: FC<SheetProps> = (props) => {
  return <table>
    <tbody>
      <Row>
        <Column>
          <Cell />
        </Column>
        <Column>
          <Cell />
        </Column>
        <Column>
          <Cell />
        </Column>
      </Row>
    </tbody>
  </table>;
}

export default Sheet
