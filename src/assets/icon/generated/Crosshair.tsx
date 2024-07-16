import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Crosshair = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 11.25h-.782a9.013 9.013 0 00-8.218-8.218V2.25a.75.75 0 10-1.5 0v.782a9.013 9.013 0 00-8.218 8.218H2.25a.75.75 0 100 1.5h.782a9.013 9.013 0 008.218 8.218v.782a.75.75 0 101.5 0v-.782a9.013 9.013 0 008.218-8.218h.782a.75.75 0 100-1.5zm-9 8.212v-.712a.75.75 0 10-1.5 0v.712a7.514 7.514 0 01-6.713-6.712h.713a.75.75 0 100-1.5h-.713a7.514 7.514 0 016.713-6.713v.713a.75.75 0 101.5 0v-.713a7.514 7.514 0 016.712 6.713h-.712a.75.75 0 100 1.5h.712a7.514 7.514 0 01-6.712 6.712zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
