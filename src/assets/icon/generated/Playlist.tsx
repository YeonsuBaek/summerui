import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Playlist = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm.75 6.75H15a.75.75 0 100-1.5H3.75a.75.75 0 100 1.5zm6.75 4.5H3.75a.75.75 0 100 1.5h6.75a.75.75 0 100-1.5zm12.718-5.41a.749.749 0 01-.937.503l-2.781-.835V18a3.005 3.005 0 11-1.5-2.596V10.5a.75.75 0 01.966-.718l3.75 1.125a.75.75 0 01.502.934zM18 18a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
        fill={fillColor}
      />
    </svg>
  )
}
