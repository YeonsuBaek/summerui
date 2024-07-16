import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookBookmark = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 2.25H6.75a3 3 0 00-3 3V21a.75.75 0 00.75.75H18a.75.75 0 100-1.5H5.25a1.5 1.5 0 011.5-1.5H19.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75zm-8.25 1.5h4.5v6.75l-1.8-1.35a.75.75 0 00-.9 0l-1.8 1.35V3.75zm7.5 13.5h-12c-.527 0-1.044.138-1.5.402V5.25a1.5 1.5 0 011.5-1.5h3V12a.75.75 0 001.2.6l2.55-1.912 2.55 1.912a.75.75 0 001.2-.6V3.75h1.5v13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
