import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleSeven = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm2.864-12.43a.75.75 0 01.094.686l-3 8.25a.75.75 0 01-.964.449.749.749 0 01-.449-.96L13.179 9H9.75a.75.75 0 010-1.5h4.5a.75.75 0 01.614.32z"
        fill={fillColor}
      />
    </svg>
  )
}
