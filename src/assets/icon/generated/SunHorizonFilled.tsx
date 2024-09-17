import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SunHorizonFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.25 15a.75.75 0 01-.75.75h-21a.75.75 0 110-1.5h3.792a6.75 6.75 0 1113.416 0H22.5a.75.75 0 01.75.75zm-3.75 3h-15a.75.75 0 100 1.5h15a.75.75 0 100-1.5zM7.579 5.586a.75.75 0 101.342-.672l-.75-1.5a.75.75 0 10-1.342.672l.75 1.5zM1.914 9.67l1.5.75a.75.75 0 10.672-1.341l-1.5-.75a.75.75 0 10-.672 1.341zm18.336.829a.75.75 0 00.335-.079l1.5-.75a.75.75 0 10-.672-1.341l-1.5.75a.75.75 0 00.337 1.42zm-4.836-4.579a.75.75 0 001.007-.335l.75-1.5a.75.75 0 10-1.342-.672l-.75 1.5a.75.75 0 00.335 1.007z"
        fill={fillColor}
      />
    </svg>
  )
}
