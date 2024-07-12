import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LessThanOrEqual = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3.75 9.75a.75.75 0 01.49-.703l14.25-5.25a.75.75 0 01.519 1.406L6.669 9.75l12.34 4.546a.75.75 0 11-.519 1.408l-14.25-5.25a.75.75 0 01-.49-.704zm15 8.25H4.5a.75.75 0 100 1.5h14.25a.75.75 0 100-1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
