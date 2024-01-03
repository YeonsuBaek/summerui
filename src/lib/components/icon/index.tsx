import Icon from "./Icon"
import { IconType } from "./Icons"

export interface IconProps {
  icon: IconType
}

export interface SvgPathType {
  d: string
  fill: string
  fillOpacity?: string
}

export { Icon }
