import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CheckFat = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.808 6.397l-2.25-2.208a1.5 1.5 0 00-2.118 0l-8.69 8.583-3.44-3.338a1.5 1.5 0 00-2.117.005l-2.25 2.25a1.5 1.5 0 000 2.12l6.715 6.75a1.499 1.499 0 002.121 0L22.812 8.522a1.499 1.499 0 00-.005-2.125zM9.714 19.5L3 12.75l2.25-2.25a.061.061 0 01.008.008l3.97 3.852a.75.75 0 001.049 0l9.229-9.11 2.244 2.213L9.714 19.5z"
        fill={fillColor}
      />
    </svg>
  )
}
