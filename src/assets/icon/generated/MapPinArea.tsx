import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MapPinArea = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM6 7.5a6 6 0 1112 0c0 5.62-5.398 8.77-5.625 8.902a.75.75 0 01-.744 0C11.398 16.269 6 13.125 6 7.5zm1.5 0c0 3.956 3.36 6.582 4.5 7.36 1.14-.777 4.5-3.404 4.5-7.36a4.5 4.5 0 10-9 0zm11.51 6.34a.75.75 0 00-.52 1.407c1.548.572 2.51 1.34 2.51 2.003 0 1.253-3.424 3-9 3-5.576 0-9-1.747-9-3 0-.664.962-1.43 2.51-2.002a.75.75 0 00-.52-1.407c-2.25.83-3.49 2.041-3.49 3.409 0 2.923 5.41 4.5 10.5 4.5s10.5-1.577 10.5-4.5c0-1.368-1.24-2.58-3.49-3.41z"
        fill={fillColor}
      />
    </svg>
  )
}
