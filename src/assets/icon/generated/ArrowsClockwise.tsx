import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsClockwise = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 4.5V9a.75.75 0 01-.75.75h-4.5a.75.75 0 110-1.5h2.69l-1.372-1.372a7.459 7.459 0 00-5.262-2.196h-.042a7.455 7.455 0 00-5.24 2.135.75.75 0 01-1.048-1.073 9 9 0 0112.656.074L19.5 7.19V4.5a.75.75 0 111.5 0zm-3.524 12.683a7.5 7.5 0 01-10.544-.061L5.56 15.75h2.69a.75.75 0 100-1.5h-4.5A.75.75 0 003 15v4.5a.75.75 0 101.5 0v-2.69l1.372 1.372a8.947 8.947 0 006.316 2.636h.05a8.94 8.94 0 006.287-2.562.75.75 0 00-1.048-1.073h-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
