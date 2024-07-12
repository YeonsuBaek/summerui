import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TShirt = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.212 5.74l-4.853-2.646A.75.75 0 0018 3h-3a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 3H6a.75.75 0 00-.36.094L.788 5.739a1.477 1.477 0 00-.617 1.994l1.806 3.45A1.534 1.534 0 003.344 12H5.25v7.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V12h1.907a1.535 1.535 0 001.367-.817l1.806-3.45a1.477 1.477 0 00-.618-1.994zM3.344 10.5a.058.058 0 01-.038-.012L1.508 7.056 5.25 5.014V10.5H3.344zm13.906 9H6.75v-15h1.575a3.75 3.75 0 007.348 0h1.577v15zm3.445-9.013a.052.052 0 01-.038.013H18.75V5.014l3.742 2.042-1.797 3.43z"
        fill={fillColor}
      />
    </svg>
  )
}
