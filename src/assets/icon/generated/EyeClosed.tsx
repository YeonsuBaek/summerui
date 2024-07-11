import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EyeClosed = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.375 16.406a.749.749 0 01-1.024-.281l-1.781-3.113a11.553 11.553 0 01-3.383 1.562l.55 3.302a.75.75 0 11-1.476.247l-.54-3.242a12.47 12.47 0 01-3.44 0l-.54 3.242a.75.75 0 11-1.482-.247l.554-3.302a11.554 11.554 0 01-3.381-1.564l-1.776 3.115a.753.753 0 11-1.307-.75l1.875-3.281a14.385 14.385 0 01-1.809-1.875.75.75 0 111.168-.938C5.14 11.207 7.862 13.5 12 13.5s6.86-2.296 8.417-4.219a.75.75 0 111.166.938 14.38 14.38 0 01-1.81 1.875l1.876 3.281a.749.749 0 01-.274 1.031z"
        fill={fillColor}
      />
    </svg>
  )
}
