import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CurrencyKrw = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 12h-2.073l2.018-4.969a.75.75 0 10-1.39-.562L18.805 12h-3.863l-2.25-5.531a.75.75 0 00-1.39 0L9.053 12h-3.86l-2.25-5.531a.75.75 0 00-1.39.562L3.57 12H1.5a.75.75 0 100 1.5h2.682l2.25 5.531a.75.75 0 001.39 0l2.25-5.531h3.866l2.25 5.531a.749.749 0 001.39 0l2.25-5.531H22.5a.75.75 0 100-1.5zM7.125 16.758L5.801 13.5H8.45l-1.324 3.258zM10.676 12L12 8.743 13.324 12h-2.648zm6.199 4.758L15.551 13.5H18.2l-1.324 3.258z"
        fill={fillColor}
      />
    </svg>
  )
}
