import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UserCircle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zM6.945 18.516a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zM9 11.25a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.469 7.469 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
        fill={fillColor}
      />
    </svg>
  )
}
