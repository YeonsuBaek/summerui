import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Users = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M10.992 14.805a5.625 5.625 0 10-6.234 0A8.984 8.984 0 00.33 18.34a.75.75 0 101.256.82 7.5 7.5 0 0112.576 0 .75.75 0 001.256-.82 8.984 8.984 0 00-4.427-3.535zm-7.242-4.68a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zm19.7 9.253a.75.75 0 01-1.037-.218 7.485 7.485 0 00-6.288-3.41.75.75 0 110-1.5 4.125 4.125 0 10-1.532-7.956.75.75 0 11-.557-1.393 5.625 5.625 0 015.206 9.904 8.984 8.984 0 014.427 3.535.75.75 0 01-.218 1.038z"
        fill={fillColor}
      />
    </svg>
  )
}
