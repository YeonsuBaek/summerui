import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Map = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.461 4.658a.75.75 0 00-.643-.136l-5.73 1.433-5.752-2.876a.75.75 0 00-.518-.057l-6 1.5a.75.75 0 00-.568.728v13.5a.75.75 0 00.932.727l5.73-1.432 5.752 2.876a.765.765 0 00.518.056l6-1.5a.75.75 0 00.568-.727V5.25a.75.75 0 00-.289-.592zM9.75 4.963l4.5 2.25v11.824l-4.5-2.25V4.963zm-6 .873l4.5-1.125v11.953l-4.5 1.125V5.836zm16.5 12.328l-4.5 1.125V7.336l4.5-1.125v11.953z"
        fill={fillColor}
      />
    </svg>
  )
}
