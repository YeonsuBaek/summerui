import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Siren = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.25 1.5V.75a.75.75 0 111.5 0v.75a.75.75 0 11-1.5 0zm7.5 3a.75.75 0 00.53-.22l.75-.75a.75.75 0 10-1.06-1.06l-.75.75a.75.75 0 00.53 1.28zM4.72 4.28a.75.75 0 101.06-1.06l-.75-.75a.75.75 0 10-1.06 1.06l.75.75zm8.156 2.48a.75.75 0 10-.248 1.48c1.779.299 3.122 1.915 3.122 3.76a.75.75 0 101.5 0c0-2.569-1.882-4.822-4.376-5.24h.002zm8.874 9.74v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V16.5a1.5 1.5 0 011.5-1.5v-3a8.25 8.25 0 018.313-8.25c4.514.034 8.187 3.777 8.187 8.344V15a1.5 1.5 0 011.5 1.5zM5.25 15h13.5v-2.906c0-3.75-3.005-6.817-6.698-6.844H12A6.75 6.75 0 005.25 12v3zm15 3.75V16.5H3.75v2.25h16.5z"
        fill={fillColor}
      />
    </svg>
  )
}
