import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Eye = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.185 11.696c-.032-.074-.827-1.835-2.592-3.6C18.241 5.742 15.27 4.5 12 4.5c-3.27 0-6.24 1.243-8.593 3.595C1.642 9.861.844 11.625.815 11.696a.75.75 0 000 .61c.032.074.827 1.834 2.592 3.6C5.759 18.256 8.73 19.5 12 19.5c3.27 0 6.24-1.243 8.593-3.594 1.765-1.766 2.56-3.526 2.592-3.6a.75.75 0 000-.61zM12 18c-2.886 0-5.407-1.05-7.493-3.117A12.511 12.511 0 012.344 12a12.499 12.499 0 012.163-2.883C6.593 7.05 9.114 6 12 6s5.407 1.05 7.493 3.117A12.507 12.507 0 0121.661 12c-.676 1.262-3.62 6-9.661 6zm0-10.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.5a3 3 0 110-5.999A3 3 0 0112 15z"
        fill={fillColor}
      />
    </svg>
  )
}