import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Alarm = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 3.75a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 16.5a7.5 7.5 0 117.5-7.5 7.508 7.508 0 01-7.5 7.5zM5.78 3.53l-3 3a.75.75 0 11-1.06-1.06l3-3a.75.75 0 011.06 1.06zm16.5 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l3 3a.75.75 0 010 1.06zM17.25 12a.75.75 0 110 1.5H12a.75.75 0 01-.75-.75V7.5a.75.75 0 111.5 0V12h4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
