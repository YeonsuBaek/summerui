import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BabyCarriage = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15 3h-.75a1.5 1.5 0 00-1.5 1.5v5.25H5.175a3.756 3.756 0 00-3.675-3 .75.75 0 000 1.5 2.25 2.25 0 012.25 2.25 7.508 7.508 0 007.5 7.5H15a7.5 7.5 0 000-15zm5.951 6.75h-5.313l3.925-3.14a5.976 5.976 0 011.388 3.14zM15 4.5a5.961 5.961 0 013.44 1.088L14.25 8.94V4.5H15zm0 12h-3.75a6.009 6.009 0 01-5.953-5.25h15.656A6.009 6.009 0 0115 16.5zM9.75 21a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9.75 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={fillColor}
      />
    </svg>
  )
}
