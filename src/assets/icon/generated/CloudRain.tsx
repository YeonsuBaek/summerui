import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudRain = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.874 18.416l-3 4.5a.751.751 0 01-1.248-.832l3-4.5a.75.75 0 111.248.832zm6.876-9.791a7.133 7.133 0 01-7.125 7.125h-2.224l-2.777 4.166a.75.75 0 01-1.248-.832l2.222-3.334H7.125a4.875 4.875 0 11.836-9.679A7.132 7.132 0 0121.75 8.625zm-1.5 0A5.63 5.63 0 009 8.293a.751.751 0 11-1.5-.086c.013-.229.037-.455.072-.678a3.375 3.375 0 10-.447 6.72h7.5a5.632 5.632 0 005.625-5.624z"
        fill={fillColor}
      />
    </svg>
  )
}
