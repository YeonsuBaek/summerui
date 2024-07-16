import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareZero = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 6.75c-1.334 0-2.438.604-3.188 1.745-.606.924-.937 2.17-.937 3.505 0 1.336.334 2.58.938 3.505.75 1.141 1.85 1.745 3.187 1.745 1.337 0 2.438-.604 3.188-1.745.606-.924.937-2.17.937-3.505 0-1.336-.334-2.58-.938-3.505C14.438 7.354 13.335 6.75 12 6.75zm0 9c-2.072 0-2.625-2.357-2.625-3.75 0-1.393.553-3.75 2.625-3.75s2.625 2.357 2.625 3.75c0 1.393-.553 3.75-2.625 3.75zM19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15z"
        fill={fillColor}
      />
    </svg>
  )
}
