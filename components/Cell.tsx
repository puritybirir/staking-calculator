"use client"

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface CellProps {
  children: ReactNode;
}

const Cell: FC<CellProps> = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const cellRef = useRef(null);

  const changeToInput = () => setIsEditable(true);

  const changeToText = () => setIsEditable(false);

  const onClickOutsideCell = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
      changeToText();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutsideCell);
    return document.addEventListener('click', onClickOutsideCell);
  }, [])

  return isEditable ? <input ref={cellRef} data-cell-id={"2"} /> : <div data-cell-id={"2"} onClick={changeToInput}>{props.children}</div>;
};

export default Cell;
