import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PencilSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.055 3.246a.75.75 0 10-1.11 1.008l4.519 4.97-5.025 5.026A1.489 1.489 0 003 15.31v4.19A1.5 1.5 0 004.5 21h4.19a1.487 1.487 0 001.06-.44l4.725-4.724 4.47 4.918a.753.753 0 00.814.21.75.75 0 00.297-1.218L5.055 3.246zM8.69 19.5H4.5v-4.19l4.974-4.969 3.99 4.389L8.69 19.5zM21.31 6.878l-4.19-4.188a1.5 1.5 0 00-2.121 0l-3.907 3.906a.75.75 0 001.062 1.06l.595-.596 4.19 4.19-.844.844a.75.75 0 001.06 1.063L21.311 9a1.5 1.5 0 000-2.122zM18 10.19L13.811 6l2.25-2.25 4.189 4.19L18 10.19z"
        fill={fillColor}
      />
    </svg>
  )
}
