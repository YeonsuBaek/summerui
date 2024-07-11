import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MouseScroll = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.5 1.5h-3a6.007 6.007 0 00-6 6v9a6.006 6.006 0 006 6h3a6.006 6.006 0 006-6v-9a6.006 6.006 0 00-6-6zm4.5 15a4.504 4.504 0 01-4.5 4.5h-3A4.504 4.504 0 016 16.5v-9A4.505 4.505 0 0110.5 3h3A4.505 4.505 0 0118 7.5v9zm-5.25-8.69v8.38l.97-.97a.75.75 0 111.06 1.06l-2.25 2.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l.97.97V7.81l-.97.97a.75.75 0 11-1.06-1.06l2.25-2.25a.749.749 0 011.06 0l2.25 2.25a.75.75 0 11-1.06 1.06l-.97-.97z"
        fill={fillColor}
      />
    </svg>
  )
}
