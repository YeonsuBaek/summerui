import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ShoppingCartSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M9.75 20.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8.25-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.473-11.8l-2.404 8.652a2.256 2.256 0 01-2.163 1.648H8.64a2.255 2.255 0 01-2.171-1.648L3.18 3.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.723.55L5.362 6H21.75a.75.75 0 01.723.95zm-1.71.55H5.779l2.138 7.7a.75.75 0 00.723.55h9.266a.75.75 0 00.723-.55l2.134-7.7z"
        fill={fillColor}
      />
    </svg>
  )
}
