"use client"

import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { cellContent } from './store/CellContentState';



interface CellProps { }

const Cell: FC<CellProps> = (props) => {
  const [cellState, setCellState] = useRecoilState<string>(cellContent);
  const [isEditable, setIsEditable] = useState(false);
  const cellRef = useRef(null);

  const changeToInput = () => setIsEditable(true);
  const changeToText = () => setIsEditable(false);
  const onClickOutsideCell = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
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
      ref={cellRef}
      data-cell-id={"2"}
      value={cellState}
      onChange={updateCellContent}
    />
  ) : (
    <div data-cell-id={"2"} onClick={changeToInput}>{cellState}</div>);
};

export default Cell;
