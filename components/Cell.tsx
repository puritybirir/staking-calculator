"use client"

import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CellContentState } from './store/CellContentState';
import { CalculateCellValue } from './store/CalculateCellValue';

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

interface CellProps {
  cellId: string;
}

const Cell: FC<CellProps> = (props) => {
  const [cellState, setCellState] = useRecoilState<string>(
    CellContentState(props.cellId)
  );
  const calculatedCellValue = useRecoilValue<string>(
    CalculateCellValue(props.cellId)
  );
  const [isEditable, setIsEditable] = useState(false);
  const cellRef = useRef(null);

  const changeToInput = () => setIsEditable(true);
  const changeToText = () => setIsEditable(false);
  const onClickOutsideCell = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      changeToText();
    }
  };
  const updateCellContent = (event: ChangeEvent<HTMLInputElement>) =>
    setCellState(event.target.value);

  useEffect(() => {
    document.addEventListener('click', onClickOutsideCell);
    return document.addEventListener('click', onClickOutsideCell);
  }, [])

  return isEditable ? (
    <input
      className='w-full h-full border-none'
      ref={cellRef}
      data-cell-id={props.cellId}
      value={cellState}
      onChange={updateCellContent}
    />
  ) : (
    <div
      className='w-full h-full text-clip whitespace-nowrap overflow-auto p-[2px] text-center'
      data-cell-id={props.cellId}
      onClick={changeToInput}>{calculatedCellValue}
    </div>
  );
};

export default Cell;
