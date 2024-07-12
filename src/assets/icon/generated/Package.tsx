import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Package = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.97 6.202l-8.25-4.514a1.489 1.489 0 00-1.44 0L3.03 6.203a1.5 1.5 0 00-.78 1.313v8.966a1.5 1.5 0 00.78 1.313l8.25 4.516a1.489 1.489 0 001.44 0l8.25-4.516a1.5 1.5 0 00.78-1.313V7.517a1.5 1.5 0 00-.78-1.315zM12 3l7.532 4.125-2.791 1.528-7.533-4.125L12 3zm0 8.25L4.468 7.125l3.178-1.74 7.532 4.125L12 11.25zM3.75 8.438l7.5 4.104v8.043l-7.5-4.102V8.438zm16.5 8.041l-7.5 4.106v-8.04l3-1.64v3.345a.75.75 0 101.5 0v-4.167l3-1.645V16.479z"
        fill={fillColor}
      />
    </svg>
  )
}
