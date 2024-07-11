import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const House = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.56 10.189l-7.5-7.5a1.5 1.5 0 00-2.12 0l-7.5 7.5A1.488 1.488 0 003 11.25v9a.75.75 0 00.75.75h6a.75.75 0 00.75-.75V15h3v5.25a.75.75 0 00.75.75h6a.75.75 0 00.75-.75v-9a1.488 1.488 0 00-.44-1.061zM19.5 19.5H15v-5.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v5.25H4.5v-8.25l7.5-7.5 7.5 7.5v8.25z"
        fill={fillColor}
      />
    </svg>
  )
}
