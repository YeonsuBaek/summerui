import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Link = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 8.272A5.103 5.103 0 0121 11.74L17.742 15a5.088 5.088 0 01-3.621 1.5h-.005A5.121 5.121 0 019 11.235a.75.75 0 011.5.042 3.62 3.62 0 006.177 2.663l3.258-3.258a3.622 3.622 0 00-5.122-5.122l-1.03 1.032a.75.75 0 01-1.061-1.06L13.753 4.5A5.124 5.124 0 0122.5 8.272zm-12.281 9.134l-1.031 1.03a3.6 3.6 0 01-2.57 1.064 3.622 3.622 0 01-2.558-6.182l3.253-3.258a3.622 3.622 0 016.187 2.663.75.75 0 001.5.042A5.144 5.144 0 0013.5 9a5.124 5.124 0 00-7.244 0L3 12.258a5.12 5.12 0 007.238 7.242l1.03-1.031a.75.75 0 00-1.05-1.063z"
        fill={fillColor}
      />
    </svg>
  )
}
