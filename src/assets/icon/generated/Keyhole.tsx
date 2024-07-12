import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Keyhole = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm3.75-9.75a3.75 3.75 0 10-6.182 2.854l-1.254 2.843A.75.75 0 009 17.25h6a.75.75 0 00.686-1.053l-1.254-2.843A3.764 3.764 0 0015.75 10.5zm-2.936 2.906l1.031 2.349H10.15l1.032-2.349a.75.75 0 00-.307-.957 2.25 2.25 0 112.25 0 .75.75 0 00-.311.957z"
        fill={fillColor}
      />
    </svg>
  )
}
