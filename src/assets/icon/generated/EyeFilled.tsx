import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EyeFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.185 11.696c-.032-.074-.827-1.835-2.592-3.6C18.241 5.742 15.27 4.5 12 4.5c-3.27 0-6.24 1.243-8.593 3.595C1.642 9.861.844 11.625.815 11.696a.75.75 0 000 .61c.033.074.827 1.834 2.592 3.6C5.759 18.256 8.73 19.5 12 19.5c3.27 0 6.24-1.243 8.593-3.594 1.765-1.766 2.56-3.526 2.592-3.6a.749.749 0 000-.61zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
