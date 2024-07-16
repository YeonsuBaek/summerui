import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SuitcaseRolling = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M9.75 8.25v9a.75.75 0 11-1.5 0v-9a.75.75 0 011.5 0zM12 7.5a.75.75 0 00-.75.75v9a.75.75 0 101.5 0v-9A.75.75 0 0012 7.5zm3 0a.75.75 0 00-.75.75v9a.75.75 0 101.5 0v-9A.75.75 0 0015 7.5zM19.5 6v13.5A1.5 1.5 0 0118 21h-1.5v1.5a.75.75 0 11-1.5 0V21H9v1.5a.75.75 0 11-1.5 0V21H6a1.5 1.5 0 01-1.5-1.5V6A1.5 1.5 0 016 4.5h2.25V2.25A2.25 2.25 0 0110.5 0h3a2.25 2.25 0 012.25 2.25V4.5H18A1.5 1.5 0 0119.5 6zM9.75 4.5h4.5V2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V4.5zm8.25 15V6H6v13.5h12z"
        fill={fillColor}
      />
    </svg>
  )
}
