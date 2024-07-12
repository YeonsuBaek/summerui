import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Waveform = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.25 9v6a.75.75 0 11-1.5 0V9a.75.75 0 011.5 0zm3-6.75A.75.75 0 007.5 3v18A.75.75 0 109 21V3a.75.75 0 00-.75-.75zm3.75 3a.75.75 0 00-.75.75v12a.75.75 0 101.5 0V6a.75.75 0 00-.75-.75zm3.75 3A.75.75 0 0015 9v6a.75.75 0 101.5 0V9a.75.75 0 00-.75-.75zm3.75-1.5a.75.75 0 00-.75.75v9a.75.75 0 101.5 0v-9a.75.75 0 00-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
