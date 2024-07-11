import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Ear = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 9.75a.75.75 0 11-1.5 0 6.75 6.75 0 00-13.5 0c0 2.503.8 3.274 1.647 4.091.81.784 1.728 1.666 1.728 3.784A3.375 3.375 0 0012 21c.96 0 1.73-.39 2.422-1.227a.748.748 0 011.251.117.75.75 0 01-.095.837C14.608 21.904 13.406 22.5 12 22.5a4.88 4.88 0 01-4.875-4.875c0-1.48-.532-1.994-1.27-2.704-.937-.905-2.105-2.03-2.105-5.171a8.25 8.25 0 1116.5 0zm-3.575 5.351a.753.753 0 00-1.025.274.75.75 0 01-1.4-.375c0-.875.452-1.477.975-2.175.597-.797 1.275-1.7 1.275-3.075a4.5 4.5 0 10-9 0 .75.75 0 101.5 0 3 3 0 116 0c0 .875-.452 1.477-.975 2.175-.597.797-1.275 1.7-1.275 3.075a2.25 2.25 0 004.198 1.125.75.75 0 00-.273-1.024z"
        fill={fillColor}
      />
    </svg>
  )
}
