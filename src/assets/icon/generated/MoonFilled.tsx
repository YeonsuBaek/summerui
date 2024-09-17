import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MoonFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.082 14.082a9.829 9.829 0 01-3.469 4.96A9.75 9.75 0 013 11.25 9.665 9.665 0 014.957 5.39a9.829 9.829 0 014.96-3.469.75.75 0 01.938.938A8.258 8.258 0 0021.15 13.15a.75.75 0 01.938.938l-.005-.007z"
        fill={fillColor}
      />
    </svg>
  )
}
