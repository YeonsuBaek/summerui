import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const GreaterThanOrEqual = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M4.991 14.296l12.34-4.546L4.99 5.204a.75.75 0 11.519-1.406l14.25 5.25a.75.75 0 010 1.406l-14.25 5.25a.75.75 0 11-.518-1.408zM19.5 18H5.25a.75.75 0 000 1.5H19.5a.75.75 0 100-1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
