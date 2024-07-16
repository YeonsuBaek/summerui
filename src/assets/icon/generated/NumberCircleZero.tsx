import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleZero = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm0-13.5c-1.334 0-2.438.604-3.188 1.745-.606.924-.937 2.17-.937 3.505 0 1.336.334 2.58.938 3.505.75 1.142 1.85 1.745 3.187 1.745 1.337 0 2.438-.603 3.188-1.745.606-.924.937-2.17.937-3.505 0-1.336-.334-2.58-.938-3.505C14.438 7.354 13.335 6.75 12 6.75zm0 9c-2.072 0-2.625-2.357-2.625-3.75 0-1.393.553-3.75 2.625-3.75s2.625 2.357 2.625 3.75c0 1.393-.553 3.75-2.625 3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
