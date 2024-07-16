import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CarProfile = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 10.5h-2.69l-4.06-4.06A1.487 1.487 0 0014.69 6H4.15a1.5 1.5 0 00-1.245.668l-2.78 4.166A.756.756 0 000 11.25v4.5a1.5 1.5 0 001.5 1.5h1.594a3 3 0 005.812 0h6.188a3 3 0 005.812 0H22.5a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5zm-18.349-3H14.69l3 3H2.156l1.995-3zM6 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5-2.25h-1.594a3 3 0 00-5.812 0H8.906a3 3 0 00-5.812 0H1.5V12h21v3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
