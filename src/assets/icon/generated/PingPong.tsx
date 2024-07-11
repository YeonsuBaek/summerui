import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PingPong = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 18.375a1.5 1.5 0 00-.623-1.097l-3.563-2.545 1.594-1.59a3.72 3.72 0 001.031-3.355 9.33 9.33 0 00-3.319-5.427 9.556 9.556 0 00-6.128-2.111 9.402 9.402 0 00-9.242 9.242 9.574 9.574 0 002.114 6.12 9.33 9.33 0 005.427 3.319 3.72 3.72 0 003.356-1.032l1.589-1.593 2.545 3.562a1.501 1.501 0 001.094.632c.041 0 .082.005.124.005a1.5 1.5 0 001.06-.44l2.498-2.498a1.5 1.5 0 00.443-1.192zM5.531 16.672a8.071 8.071 0 01-1.781-5.157 7.9 7.9 0 017.762-7.765 8.089 8.089 0 015.157 1.781 7.978 7.978 0 011.76 1.978L7.51 18.43a7.976 7.976 0 01-1.978-1.757zM18.501 21l-3.059-4.283a.749.749 0 00-.548-.312h-.062a.75.75 0 00-.53.22l-2.216 2.215a2.22 2.22 0 01-2.002.622 7.53 7.53 0 01-1.153-.329l10.2-10.2c.14.376.25.761.328 1.154a2.219 2.219 0 01-.622 2.002l-2.215 2.213a.75.75 0 00.094 1.14L21 18.503 18.502 21z"
        fill={fillColor}
      />
    </svg>
  )
}