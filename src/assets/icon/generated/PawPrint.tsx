import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PawPrint = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.875 7.5a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm0 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM6.75 10.125a2.625 2.625 0 10-5.25 0 2.625 2.625 0 005.25 0zM4.125 11.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.5-3a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm0-3.75a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm6.75 3.75a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zm0-3.75a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm2.168 9.456a3.309 3.309 0 01-1.582-1.982 4.124 4.124 0 00-7.922 0 3.305 3.305 0 01-1.57 1.978 3.75 3.75 0 003.236 6.755 6.009 6.009 0 014.582 0 3.75 3.75 0 003.255-6.75v-.001zM15.75 19.5a2.25 2.25 0 01-.886-.18 7.513 7.513 0 00-5.737 0 2.25 2.25 0 01-1.941-4.057 4.8 4.8 0 002.293-2.875 2.625 2.625 0 015.042 0 4.807 4.807 0 002.3 2.88A2.25 2.25 0 0115.75 19.5z"
        fill={fillColor}
      />
    </svg>
  )
}
