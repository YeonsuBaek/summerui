import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListStar = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm.75 6.75H9a.75.75 0 100-1.5H3.75a.75.75 0 100 1.5zm6.75 4.5H3.75a.75.75 0 100 1.5h6.75a.75.75 0 100-1.5zm11.727-3.77l-2.111 1.742.643 2.598a.75.75 0 01-1.108.826l-2.401-1.413-2.4 1.413a.75.75 0 01-1.11-.826l.643-2.598-2.11-1.743a.75.75 0 01.419-1.325l2.797-.217 1.072-2.484a.75.75 0 011.378 0l1.072 2.484 2.797.217a.75.75 0 01.42 1.325zm-2.388.026l-1.396-.108a.75.75 0 01-.63-.45l-.563-1.305-.563 1.305a.75.75 0 01-.63.45l-1.396.108 1.041.86a.749.749 0 01.251.759l-.328 1.323 1.244-.732a.75.75 0 01.762 0l1.244.732-.328-1.323a.75.75 0 01.25-.759l1.042-.86z"
        fill={fillColor}
      />
    </svg>
  )
}
