import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListHeart = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm.75 6.75h6a.75.75 0 100-1.5h-6a.75.75 0 100 1.5zm7.5 4.5h-7.5a.75.75 0 100 1.5h7.5a.75.75 0 100-1.5zm12-3.75c0 3.424-4.714 5.82-4.914 5.921a.75.75 0 01-.672 0c-.2-.101-4.914-2.497-4.914-5.921A3 3 0 0118 11.518a3 3 0 015.25 1.982zm-1.5 0a1.5 1.5 0 10-3 0 .75.75 0 11-1.5 0 1.5 1.5 0 10-3 0c0 1.892 2.457 3.67 3.75 4.4 1.293-.73 3.75-2.507 3.75-4.4z"
        fill={fillColor}
      />
    </svg>
  )
}
