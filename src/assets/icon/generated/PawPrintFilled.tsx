import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PawPrintFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 10.125a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0zm-15.75 0a2.625 2.625 0 10-5.25 0 2.625 2.625 0 005.25 0zM8.625 8.25a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm6.75 0a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm2.168 5.706a3.309 3.309 0 01-1.582-1.982 4.124 4.124 0 00-7.922 0 3.305 3.305 0 01-1.57 1.978 3.75 3.75 0 003.236 6.755 6.009 6.009 0 014.582 0 3.75 3.75 0 003.255-6.75v-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
