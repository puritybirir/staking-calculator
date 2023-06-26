import { FC, ReactNode } from 'react'

interface ColumnProps {
  children?: ReactNode
}

const Column: FC<ColumnProps> = (props) => {
  return <td className='min-w-[100px] h-[25px] max-w-[100px]'>{props.children}</td>
}

export default Column
