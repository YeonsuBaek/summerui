import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Basket = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12.75 11.25v5.25a.75.75 0 01-1.5 0v-5.25a.75.75 0 111.5 0zm3.454-.075l-.525 5.25a.749.749 0 00.671.825c.025.002.05.002.076 0a.75.75 0 00.745-.675l.525-5.25a.75.75 0 00-1.492-.15zm-8.408 0a.75.75 0 10-1.492.15l.525 5.25a.75.75 0 00.75.675c.025.002.05.002.076 0a.751.751 0 00.67-.821l-.529-5.254zM22.493 8.35l-1.412 10.6a1.506 1.506 0 01-1.487 1.301H4.406A1.506 1.506 0 012.92 18.95l-1.412-10.6A.75.75 0 012.25 7.5h4.16l5.027-5.744a.75.75 0 011.126 0L17.59 7.5h4.16a.75.75 0 01.743.85zM8.403 7.5h7.194L12 3.39 8.403 7.5zM20.893 9H3.107l1.3 9.75h15.187l1.3-9.75z"
        fill={fillColor}
      />
    </svg>
  )
}
