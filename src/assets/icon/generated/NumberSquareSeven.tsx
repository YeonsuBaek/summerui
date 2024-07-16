import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareSeven = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zM14.864 7.82a.75.75 0 01.094.686l-3 8.25a.75.75 0 01-.964.449.75.75 0 01-.449-.96L13.179 9H9.75a.75.75 0 010-1.5h4.5a.75.75 0 01.614.32z"
        fill={fillColor}
      />
    </svg>
  )
}
