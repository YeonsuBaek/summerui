import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PencilLineFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.311 6.878l-4.19-4.188a1.5 1.5 0 00-2.121 0L3.44 14.25A1.487 1.487 0 003 15.31v4.19A1.5 1.5 0 004.5 21h15.75a.75.75 0 100-1.5h-9.439L21.311 9a1.5 1.5 0 000-2.122zM18 10.19L13.811 6l2.25-2.25 4.189 4.19L18 10.19z"
        fill={fillColor}
      />
    </svg>
  )
}
