import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SunHorizon = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 14.25h-3.792a6.75 6.75 0 10-13.416 0H1.5a.75.75 0 100 1.5h21a.75.75 0 100-1.5zM6.75 13.5a5.25 5.25 0 1110.445.75H6.805a5.263 5.263 0 01-.055-.75zm13.5 5.25a.75.75 0 01-.75.75h-15a.75.75 0 110-1.5h15a.75.75 0 01.75.75zM6.829 4.086a.75.75 0 011.342-.672l.75 1.5a.75.75 0 11-1.342.672l-.75-1.5zm-5.25 4.578a.75.75 0 011.007-.334l1.5.75a.75.75 0 11-.672 1.341l-1.5-.75a.75.75 0 01-.335-1.007zm18 1.422a.75.75 0 01.335-1.006l1.5-.75a.75.75 0 11.672 1.341l-1.5.75a.748.748 0 01-1.007-.335zm-4.5-5.172l.75-1.5a.751.751 0 011.342.672l-.75 1.5a.751.751 0 01-1.342-.672z"
        fill={fillColor}
      />
    </svg>
  )
}
