import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Flash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.25 1.5H6.75A1.5 1.5 0 005.25 3v4.25c0 .324.106.64.3.9l1.95 2.6V21A1.5 1.5 0 009 22.5h6a1.5 1.5 0 001.5-1.5V10.75l1.95-2.6c.194-.26.3-.576.3-.9V3a1.5 1.5 0 00-1.5-1.5zM6.75 3h10.5v2.25H6.75V3zm8.55 6.85c-.194.26-.3.576-.3.9V21H9V10.75c0-.324-.106-.64-.3-.9l-1.95-2.6v-.5h10.5v.5l-1.95 2.6zm-2.55 1.4v3a.75.75 0 11-1.5 0v-3a.75.75 0 111.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
