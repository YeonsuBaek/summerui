import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UsersFour = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M2.55 11.85a.749.749 0 001.05-.15 4.874 4.874 0 017.8 0 .75.75 0 001.2 0 4.874 4.874 0 017.8 0 .75.75 0 101.2-.901 6.36 6.36 0 00-2.569-2.033 3.75 3.75 0 10-5.057 0 6.308 6.308 0 00-1.968 1.342 6.306 6.306 0 00-1.97-1.342 3.75 3.75 0 10-5.056 0A6.364 6.364 0 002.4 10.8a.75.75 0 00.15 1.05zm13.95-8.1a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm11.531 14.767a3.75 3.75 0 10-5.057 0 6.307 6.307 0 00-1.968 1.341 6.305 6.305 0 00-1.97-1.341 3.75 3.75 0 10-5.056 0A6.364 6.364 0 002.4 20.55a.75.75 0 101.2.9 4.874 4.874 0 017.8 0 .75.75 0 001.2 0 4.874 4.874 0 017.8 0 .75.75 0 101.2-.901 6.36 6.36 0 00-2.569-2.032zM7.5 13.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm9 0a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
