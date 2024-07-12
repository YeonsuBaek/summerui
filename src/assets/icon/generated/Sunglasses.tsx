import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Sunglasses = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.75 3.75a.75.75 0 100 1.5 1.5 1.5 0 011.5 1.5V12H3.75V6.75a1.5 1.5 0 011.5-1.5.75.75 0 000-1.5 3 3 0 00-3 3v8.625a4.125 4.125 0 008.25 0V13.5h3v1.875a4.125 4.125 0 008.25 0V6.75a3 3 0 00-3-3zm1.184 12.873L16.81 13.5h3.44v1.875c0 .436-.108.865-.316 1.248zM3.75 15.375V13.81l3.873 3.874a2.625 2.625 0 01-3.873-2.309zm5.25 0c0 .436-.108.865-.316 1.248L5.56 13.5H9v1.875zm6 0V13.81l3.873 3.874A2.625 2.625 0 0115 15.375z"
        fill={fillColor}
      />
    </svg>
  )
}
