import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CurrencyEur = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.813 18.03a.751.751 0 01-.06 1.06 7.5 7.5 0 01-12.466-4.84H3.75a.75.75 0 110-1.5h1.5v-1.5h-1.5a.75.75 0 110-1.5h1.537a7.5 7.5 0 0112.464-4.84.75.75 0 01-1.002 1.118A6 6 0 006.8 9.75h5.951a.75.75 0 110 1.5h-6v1.5h4.5a.75.75 0 110 1.5H6.799a6 6 0 009.95 3.723.75.75 0 011.064.058z"
        fill={fillColor}
      />
    </svg>
  )
}
