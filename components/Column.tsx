import { FC, ReactNode } from 'react'

interface ColumnProps {
  children?: ReactNode
}

const Column: FC<ColumnProps> = (props) => {
  return <td>{props.children}</td>
}

export default Column
