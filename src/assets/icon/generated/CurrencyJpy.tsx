import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CurrencyJpy = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.33 4.975L13.583 12H16.5a.75.75 0 110 1.5h-3.75V15h3.75a.75.75 0 110 1.5h-3.75v3.75a.75.75 0 11-1.5 0V16.5H7.5a.75.75 0 110-1.5h3.75v-1.5H7.5a.75.75 0 110-1.5h2.918L4.67 4.975a.75.75 0 011.16-.95l6.17 7.54 6.17-7.54a.75.75 0 111.16.95z"
        fill={fillColor}
      />
    </svg>
  )
}
