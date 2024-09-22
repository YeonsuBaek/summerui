import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CactusFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 20.25a.75.75 0 01-.75.75H3.75a.75.75 0 110-1.5h4.5v-6.75H7.5a6.006 6.006 0 01-6-6A2.257 2.257 0 013.757 4.5h.038A2.208 2.208 0 016 6.705v.045a1.5 1.5 0 001.5 1.5h.75v-3a3.75 3.75 0 017.5 0V12h.75a1.5 1.5 0 001.5-1.5v-.045a2.208 2.208 0 012.205-2.205h.038A2.257 2.257 0 0122.5 10.5a6.006 6.006 0 01-6 6h-.75v3h4.5a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
