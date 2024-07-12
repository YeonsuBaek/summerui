import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FlagPennant = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.747 9.041l-17.25-6a.75.75 0 00-.997.709v16.5a.75.75 0 101.5 0v-3.967l16.747-5.824a.75.75 0 000-1.418zM6 14.695v-9.89L20.217 9.75 6 14.695z"
        fill={fillColor}
      />
    </svg>
  )
}
