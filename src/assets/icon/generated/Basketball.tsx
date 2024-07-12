import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Basketball = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zM5.625 6.766a8.175 8.175 0 011.84 4.484h-3.68a8.207 8.207 0 011.84-4.484zm7.125 4.484V3.785a8.212 8.212 0 014.564 1.91 9.662 9.662 0 00-2.286 5.555H12.75zm-1.5 0H8.972a9.662 9.662 0 00-2.286-5.556 8.212 8.212 0 014.564-1.91v7.466zm-3.785 1.5a8.175 8.175 0 01-1.84 4.484 8.207 8.207 0 01-1.84-4.484h3.68zm1.507 0h2.278v7.465a8.212 8.212 0 01-4.564-1.91 9.664 9.664 0 002.286-5.555zm3.778 0h2.278a9.665 9.665 0 002.286 5.556 8.212 8.212 0 01-4.564 1.91V12.75zm3.785 0h3.68a8.207 8.207 0 01-1.84 4.484 8.175 8.175 0 01-1.84-4.484zm0-1.5a8.175 8.175 0 011.84-4.484 8.207 8.207 0 011.84 4.484h-3.68z"
        fill={fillColor}
      />
    </svg>
  )
}
