import { FC, ReactNode } from 'react'
import Column from './Column';
import Row from './Row';
import Cell, { CELL_HEIGHT, CELL_WIDTH } from './Cell';
import { SheetSizeState } from './store/SheetSizeState';
import { useRecoilValue } from 'recoil';

interface SheetProps { }

const Sheet: FC<SheetProps> = (props) => {

  const sheetSize = useRecoilValue(SheetSizeState);
  const columnsNum = sheetSize.width / CELL_WIDTH;
  const rowsNum = sheetSize.height / CELL_HEIGHT;
  return (
    <table>
      <tbody>
        {[...Array(rowsNum)].map((row, rowIndex) => (
          <Row key={rowIndex}>
            {[...Array(columnsNum)].map((column, columnIndex) => (
              <Column key={columnIndex}>
                <Cell />
              </Column>
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  );
};

export default Sheet
