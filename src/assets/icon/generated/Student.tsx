import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Student = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.237 5.288l-9-3a.75.75 0 00-.474 0l-9 3A.75.75 0 002.25 6v7.5a.75.75 0 101.5 0V7.04L6.9 8.09a6 6 0 001.935 8.254c-1.688.662-3.146 1.86-4.213 3.496a.75.75 0 101.256.82c1.413-2.168 3.644-3.41 6.122-3.41 2.478 0 4.71 1.242 6.122 3.41a.75.75 0 001.256-.82c-1.067-1.637-2.531-2.834-4.213-3.496a6 6 0 001.936-8.25l4.136-1.378a.75.75 0 000-1.423v-.005zM16.5 11.25a4.5 4.5 0 11-8.123-2.667l3.386 1.125a.75.75 0 00.474 0l3.386-1.125a4.49 4.49 0 01.877 2.667zM12 8.21L5.372 6 12 3.79 18.628 6 12 8.21z"
        fill={fillColor}
      />
    </svg>
  )
}
