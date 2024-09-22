import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudSunFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.375 6.75c-.642 0-1.28.086-1.9.256a5.21 5.21 0 00-.882-1.082l.892-1.272a.75.75 0 10-1.23-.86l-.89 1.27A5.241 5.241 0 009 4.5h-.163l-.271-1.527a.75.75 0 10-1.477.26l.27 1.531a5.26 5.26 0 00-2.181 1.393L3.9 5.263a.75.75 0 10-.86 1.23l1.272.892A5.208 5.208 0 003.75 9.75v.161l-1.527.27a.75.75 0 10.26 1.478l1.53-.27c.134.409.318.8.549 1.164A4.875 4.875 0 007.875 21h7.5a7.125 7.125 0 100-14.25zM8.711 11.32c-.986-.17-2-.034-2.906.391a3.75 3.75 0 016.246-4.14 7.15 7.15 0 00-3.34 3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
