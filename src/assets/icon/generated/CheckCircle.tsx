import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CheckCircle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.28 9.22a.748.748 0 010 1.06l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 011.06 0zM21.75 12A9.75 9.75 0 1112 2.25 9.76 9.76 0 0121.75 12zm-1.5 0A8.25 8.25 0 1012 20.25 8.26 8.26 0 0020.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
