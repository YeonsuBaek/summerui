import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Question = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.125 16.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 6.75c-2.068 0-3.75 1.514-3.75 3.375v.375a.75.75 0 101.5 0v-.375c0-1.031 1.01-1.875 2.25-1.875s2.25.844 2.25 1.875C14.25 11.156 13.24 12 12 12a.75.75 0 00-.75.75v.75a.75.75 0 101.5 0v-.068c1.71-.314 3-1.678 3-3.307 0-1.86-1.682-3.375-3.75-3.375zM21.75 12A9.75 9.75 0 1112 2.25 9.76 9.76 0 0121.75 12zm-1.5 0A8.25 8.25 0 1012 20.25 8.26 8.26 0 0020.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
