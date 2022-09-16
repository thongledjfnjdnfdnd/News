// lib
import { memo } from 'react'

// style
import { StyledToolTip } from './styles'

export type TooltipProps = {
  nameTag: string
}

const Tooltip = ({ nameTag }: TooltipProps) => {
  return (
    <div>
      <StyledToolTip href=''>{nameTag}</StyledToolTip>
    </div>
  )
}

export default memo(Tooltip)
