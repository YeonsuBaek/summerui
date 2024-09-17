import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DropFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.313 4.477A23.832 23.832 0 0012.427.886a.75.75 0 00-.861 0 23.832 23.832 0 00-3.879 3.59C5.11 7.437 3.75 10.557 3.75 13.5a8.25 8.25 0 1016.5 0c0-2.944-1.36-6.064-3.938-9.023zm.923 9.899a5.4 5.4 0 01-4.365 4.364.75.75 0 01-.245-1.48c1.554-.261 2.872-1.58 3.135-3.136a.75.75 0 011.48.252h-.005z"
        fill={fillColor}
      />
    </svg>
  )
}
