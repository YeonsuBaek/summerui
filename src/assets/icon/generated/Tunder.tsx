import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Tunder = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.23 11.078a.75.75 0 00-.468-.53L14.36 8.522l1.374-6.875a.75.75 0 00-1.283-.656l-10.5 11.25a.75.75 0 00.28 1.219l5.404 2.026-1.371 6.867a.75.75 0 001.283.656l10.5-11.25a.75.75 0 00.182-.68zm-9.977 8.985l.982-4.911a.75.75 0 00-.469-.85l-4.954-1.86 7.934-8.5-.981 4.91a.75.75 0 00.469.85l4.95 1.856-7.93 8.505z"
        fill={fillColor}
      />
    </svg>
  )
}
