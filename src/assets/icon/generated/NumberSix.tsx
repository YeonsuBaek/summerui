import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSix = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 9.75c-.495 0-.989.07-1.464.209l2.87-5.09a.753.753 0 00-1.312-.737l-4.646 8.25A5.25 5.25 0 1012 9.75zm0 9a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
