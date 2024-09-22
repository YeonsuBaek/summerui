import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsClockwiseFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 4.5V9a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.53-1.28l1.716-1.72a7.451 7.451 0 00-5.13-2.07h-.042a7.455 7.455 0 00-5.24 2.137.75.75 0 01-1.048-1.073A9 9 0 0118 5.691l1.721-1.722A.75.75 0 0121 4.5zm-3.524 12.683a7.5 7.5 0 01-10.412.067l1.717-1.717a.75.75 0 00-.531-1.283h-4.5A.75.75 0 003 15v4.5a.75.75 0 001.28.53L6 18.31a8.945 8.945 0 006.188 2.508h.05a8.94 8.94 0 006.287-2.562.75.75 0 00-1.048-1.073h-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
