import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerCold = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.335 7.286l-1.875.609 1.157 1.593a.75.75 0 11-1.213.882L20.25 8.776l-1.157 1.594a.75.75 0 01-1.213-.882l1.157-1.593-1.875-.609a.75.75 0 01.463-1.427l1.875.61V4.5a.75.75 0 111.5 0v1.969l1.875-.609a.75.75 0 01.464 1.427h-.004zM14.25 17.25a3 3 0 11-3.75-2.906V11.25a.75.75 0 111.5 0v3.094a3.006 3.006 0 012.25 2.906zm-1.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4.5 0a6 6 0 11-9.75-4.688V4.5a3.75 3.75 0 017.5 0v8.063a6.007 6.007 0 012.25 4.687zm-1.5 0a4.507 4.507 0 00-1.93-3.694.75.75 0 01-.32-.618V4.5a2.25 2.25 0 00-4.5 0v8.438a.75.75 0 01-.32.614 4.5 4.5 0 107.07 3.698z"
        fill={fillColor}
      />
    </svg>
  )
}
