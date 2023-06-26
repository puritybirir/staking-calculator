import { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { SheetSizeState } from './store/SheetSizeState'

interface ResizerProps { }

const Resizer: FC<ResizerProps> = (props) => {
  const [sheetSize, setSheetSize] = useRecoilState(SheetSizeState);

  const initiateDrag = () => {
    document.addEventListener("mousemove", startDrag)
    document.addEventListener("mouseup", stopDrag)
  }

  const startDrag = (event: MouseEvent) => {
    const pointerX = event.pageX;
    const pointerY = event.pageY;

    setSheetSize({
      width: pointerX,
      height: pointerY
    })
  }

  const stopDrag = () => {
    document.removeEventListener("mousemove", startDrag)
    document.removeEventListener("mouseup", stopDrag)
  }

  return <div onMouseDown={initiateDrag} className='w-[8px] h-[8px] bg-blue-700 absolute right-[-8px] bottom-[-8px] cursor-se-resize' />
}

export default Resizer
