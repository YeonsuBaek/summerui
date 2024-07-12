import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Leaf = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.948 3.757a.75.75 0 00-.705-.705c-7.137-.42-12.854 1.73-15.291 5.76a8.165 8.165 0 00-1.196 4.594c.053 1.493.488 3 1.292 4.486L3.22 19.72a.75.75 0 101.062 1.062l1.828-1.83c1.485.804 2.993 1.239 4.485 1.292a8.15 8.15 0 004.594-1.196c4.03-2.437 6.18-8.153 5.76-15.291zm-6.534 14.009c-2.133 1.292-4.657 1.312-7.192.072l8.31-8.308a.751.751 0 00-1.062-1.062l-8.308 8.313c-1.236-2.531-1.219-5.062.072-7.191 2.071-3.42 6.994-5.292 13.248-5.068.224 6.249-1.649 11.173-5.068 13.244z"
        fill={fillColor}
      />
    </svg>
  )
}
