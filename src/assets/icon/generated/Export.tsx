import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Export = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 10.5v9a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 015.25 9H7.5a.75.75 0 110 1.5H5.25v9h13.5v-9H16.5a.75.75 0 110-1.5h2.25a1.5 1.5 0 011.5 1.5zM8.78 6.53l2.47-2.47v8.69a.75.75 0 101.5 0V4.06l2.47 2.47a.75.75 0 101.06-1.06l-3.75-3.75a.749.749 0 00-1.06 0L7.72 5.47a.75.75 0 101.06 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
