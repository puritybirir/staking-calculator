import { FC, ReactNode } from 'react'

interface AxisCellProps {
  children?: ReactNode
}

const AxisCell: FC<AxisCellProps> = (props) => {
  return <th className='bg-[#ddd] p-[4px] border border-[#777] text-center'>{props.children}</th>
}

export default AxisCell
