import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Television = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 6h-6.44l3.22-3.22a.75.75 0 10-1.06-1.06L12 5.69 8.03 1.72a.75.75 0 00-1.06 1.06L10.19 6H3.75a1.5 1.5 0 00-1.5 1.5v11.25a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5zM3.75 7.5h9.75v11.25H3.75V7.5zm16.5 11.25H15V7.5h5.25v11.25zm-1.5-7.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm0 4.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
