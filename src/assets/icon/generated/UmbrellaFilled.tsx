import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UmbrellaFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 11.872A10.52 10.52 0 0012 2.25a10.52 10.52 0 00-10.495 9.622A1.5 1.5 0 003 13.5h8.25v5.25a3 3 0 006 0 .75.75 0 10-1.5 0 1.5 1.5 0 11-3 0V13.5H21a1.499 1.499 0 001.5-1.628zM3 12a9.014 9.014 0 017.144-8.052C9.045 5.438 7.674 8.073 7.516 12H3zm13.484 0c-.157-3.927-1.529-6.562-2.625-8.057A9.007 9.007 0 0121 12h-4.516z"
        fill={fillColor}
      />
    </svg>
  )
}
