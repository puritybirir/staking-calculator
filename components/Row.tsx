import { FC, ReactNode } from 'react'

interface RowProps {
  children?: ReactNode
}

const Row: FC<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
}

export default Row
