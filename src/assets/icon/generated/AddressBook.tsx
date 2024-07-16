import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const AddressBook = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M7.8 16.35a.75.75 0 001.05-.15 4.874 4.874 0 017.8 0 .75.75 0 101.2-.9 6.363 6.363 0 00-2.569-2.033 3.75 3.75 0 10-5.057 0A6.362 6.362 0 007.65 15.3a.75.75 0 00.15 1.05zm2.7-5.85a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm9-8.25H6a1.5 1.5 0 00-1.5 1.5V6H3a.75.75 0 000 1.5h1.5v3.75H3a.75.75 0 100 1.5h1.5v3.75H3A.75.75 0 103 18h1.5v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm0 18H6V3.75h13.5v16.5z"
        fill={fillColor}
      />
    </svg>
  )
}
