import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Power = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.25 12V4.5a.75.75 0 111.5 0V12a.75.75 0 11-1.5 0zm5.66-7.378a.75.75 0 00-.82 1.256C18.257 7.291 19.5 9.522 19.5 12a7.5 7.5 0 01-15 0c0-2.478 1.243-4.71 3.41-6.122a.75.75 0 00-.82-1.256C4.49 6.317 3 9.006 3 12a9 9 0 0018 0c0-2.994-1.49-5.683-4.09-7.378z"
        fill={fillColor}
      />
    </svg>
  )
}
