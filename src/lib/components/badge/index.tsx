import DotBadge from "./DotBadge"
import StatusBadge from "./StatusBadge"
import CountBadge from "./CountBadge"
import RibbonBadge from "./RibbonBadge"
import { CSSProperties } from "react"

export interface RibbonBadgeProps {
  value: string
  color?:
    | "default"
    | "blue"
    | "pink"
    | "red"
    | "orange"
    | "cyan"
    | "green"
    | "purple"
  style?: CSSProperties
}

export { DotBadge, RibbonBadge, StatusBadge, CountBadge }
