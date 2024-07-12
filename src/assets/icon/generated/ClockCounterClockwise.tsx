import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClockCounterClockwise = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12.75 7.5v4.075l3.386 2.032a.75.75 0 01-.772 1.286l-3.75-2.25A.75.75 0 0111.25 12V7.5a.75.75 0 111.5 0zM12 3a8.948 8.948 0 00-6.367 2.64A38.696 38.696 0 003.75 7.687V6a.75.75 0 00-1.5 0v3.75a.75.75 0 00.75.75h3.75a.75.75 0 100-1.5H4.594c.67-.79 1.338-1.533 2.099-2.303a7.5 7.5 0 11.155 10.757.752.752 0 00-1.03 1.092A9 9 0 1012 3z"
        fill={fillColor}
      />
    </svg>
  )
}
