import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClosedCaptioning = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 4.5H3A1.5 1.5 0 001.5 6v12A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0021 4.5zM21 18H3V6h18v12zm-9.851-3.777a.75.75 0 01-.274 1.024 3.75 3.75 0 110-6.495.75.75 0 11-.75 1.299 2.25 2.25 0 100 3.898.75.75 0 011.024.274zm7.5 0a.75.75 0 01-.274 1.024 3.75 3.75 0 110-6.495.75.75 0 11-.75 1.299 2.25 2.25 0 100 3.898.75.75 0 011.024.274z"
        fill={fillColor}
      />
    </svg>
  )
}
