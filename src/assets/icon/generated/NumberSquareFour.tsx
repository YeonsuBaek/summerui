import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareFour = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zm-4.5-6h-.75v-6a.75.75 0 00-1.342-.46l-5.25 6.75A.75.75 0 008.25 15h4.5v1.5a.75.75 0 101.5 0V15H15a.75.75 0 100-1.5zm-2.25 0H9.784l2.966-3.814V13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
