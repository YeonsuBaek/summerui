import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Ghost = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M10.5 10.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm4.125-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM21 11.25v9a.75.75 0 01-1.225.58L17.5 18.97l-2.275 1.86a.75.75 0 01-.95 0L12 18.97l-2.275 1.86a.75.75 0 01-.95 0L6.5 18.97l-2.275 1.86A.75.75 0 013 20.25v-9a9 9 0 1118 0zm-1.5 0a7.5 7.5 0 00-15 0v7.418l1.525-1.248a.75.75 0 01.95 0l2.275 1.86 2.275-1.86a.75.75 0 01.95 0l2.275 1.86 2.275-1.86a.75.75 0 01.95 0l1.525 1.247V11.25z"
        fill={fillColor}
      />
    </svg>
  )
}
