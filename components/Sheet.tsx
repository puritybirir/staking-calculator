import { FC, ReactNode } from 'react'
import Column from './Column';
import Row from './Row';
import AxisCell from './AxisCell';
import Cell, { CELL_HEIGHT, CELL_WIDTH } from './Cell';
import { SheetSizeState } from './store/SheetSizeState';
import { useRecoilValue } from 'recoil';
// import Resizer from './Resizer';
// import { numToLetter } from '@/utils/numberToLetter';


interface SheetProps { }

const Sheet: FC<SheetProps> = (props) => {

  const sheetSize = useRecoilValue(SheetSizeState);
  const columnsNum = 3;
  const rowsNum = Math.ceil(sheetSize.height / CELL_HEIGHT);
  return (
    <div className='relative w-full'>
      <table className='w-full mt-[14px]'>
        <thead className="rounded">
          <tr className="rounded w-full bg-[#EFEFEF] text-[11px]">
            <th className="font-medium p-3 text-black">Price</th>
            <th className="font-medium p-3 text-black">Reward Rate</th>
            <th className="font-medium p-3 text-black">Annual Reward in $</th>
          </tr>
        </thead>
        <tbody>
          {/* <Row>
            {[...Array(columnsNum + 1)].map((column, columnIndex) =>
              columnIndex !== 0 ? (
                <AxisCell key={columnIndex}>{numToLetter(columnIndex - 1)}</AxisCell>
              ) : (
                <AxisCell key={columnIndex} />
              )
            )}
          </Row> */}
          {[...Array(rowsNum)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              {/* <AxisCell>{rowIndex + 1}</AxisCell> */}
              {[...Array(columnsNum)].map((column, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellId={`${rowIndex},${columnIndex}`} />
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
      {/* <Resizer /> */}
    </div>
  );
};

export default Sheet
