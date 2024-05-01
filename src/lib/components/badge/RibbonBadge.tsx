import React from "react"
import { RibbonBadgeProps } from "."

const RibbonBadge = ({
  value,
  color = "default",
  style = {},
}: RibbonBadgeProps) => {
  return (
    <div className={`ui-badge-ribbon ${color}`} style={style}>
      {value}
    </div>
  )
}

export default RibbonBadge
