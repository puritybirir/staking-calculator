"use client"

import { ChangeEvent, FC, KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CellContentState } from './store/CellContentState';
import { CalculateCellValue } from './store/CalculateCellValue';
import Image from 'next/image';
import pencil from '../assets/images/pencil.svg';

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
  const cellRef = useRef<HTMLInputElement>(null);

  const changeToInput = () => {
    setIsEditable(true);
    setTimeout(() => {
      cellRef.current?.focus();
    })
  };

  const changeToText = () => setIsEditable(false);

  const onClickOutsideCell = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      changeToText();
    }
  };

  const defocusInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditable(false);
    }
  }

  const updateCellContent = (event: ChangeEvent<HTMLInputElement>) =>
    setCellState(event.target.value);

  useEffect(() => {
    document.addEventListener('click', onClickOutsideCell);
    return document.addEventListener('click', onClickOutsideCell);
  }, [])

  return isEditable ? (
    <input
      className='w-full h-[32px] border-none p-[8px] outline-none bg-[#FAFAFA] mt-1 border-r border-gray-200 rounded'
      ref={cellRef}
      data-cell-id={props.cellId}
      value={cellState}
      onChange={updateCellContent}
      onKeyDown={defocusInput}
    />
  ) : (
    <div className='relative bg-[#FAFAFA] mt-1 border-r border-gray-200 rounded'>
      <div
        className='w-full h-[32px] text-clip whitespace-nowrap overflow-auto p-[8px] text-[14px] text-center relative'
        data-cell-id={props.cellId}
        onClick={changeToInput}
      >
        {calculatedCellValue}
      </div>
      <Image src={pencil} className="absolute right-1 bottom-1" alt="Pencil edit icon" />
    </div>
  );
};

export default Cell;
