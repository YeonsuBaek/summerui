import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThumbsUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.938 7.511a2.25 2.25 0 00-1.688-.761H15v-1.5a3.75 3.75 0 00-3.75-3.75.75.75 0 00-.671.414L7.037 9H3a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5h16.125a2.25 2.25 0 002.233-1.969l1.125-9a2.25 2.25 0 00-.546-1.77zM3 10.5h3.75v8.25H3V10.5zm17.994-1.406l-1.125 9a.75.75 0 01-.744.656H8.25V9.927l3.442-6.884A2.25 2.25 0 0113.5 5.25V7.5a.75.75 0 00.75.75h6a.75.75 0 01.744.844z"
        fill={fillColor}
      />
    </svg>
  )
}
