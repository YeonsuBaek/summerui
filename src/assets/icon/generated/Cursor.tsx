import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Cursor = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.75 12.44l4.32-1.659.03-.012a1.5 1.5 0 00-.131-2.794L4.96 3.075a1.495 1.495 0 00-1.886 1.886l4.9 15.008A1.483 1.483 0 009.326 21H9.4a1.485 1.485 0 001.37-.9l.012-.03 1.659-4.32 4.81 4.81a1.5 1.5 0 002.122 0l1.188-1.188a1.5 1.5 0 000-2.122l-4.81-4.81zm2.56 7.06l-4.81-4.81a1.5 1.5 0 00-2.438.462c0 .01-.008.02-.012.03l-1.654 4.312L4.5 4.5l14.986 4.894-4.308 1.653-.03.013a1.5 1.5 0 00-.462 2.437L19.5 18.31l-1.19 1.19z"
        fill={fillColor}
      />
    </svg>
  )
}
