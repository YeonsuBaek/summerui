import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FilmSlate = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 9.75H9.57l10.117-2.67a.75.75 0 00.533-.923l-.765-2.813a1.493 1.493 0 00-1.82-1.043L3.356 6.069a1.477 1.477 0 00-.91.694 1.454 1.454 0 00-.144 1.125L3 10.458v8.292a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 00-.75-.75zm-2.235-6l.563 2.07-2.121.562-2.636-1.523 4.194-1.109zM11.763 5.4l2.636 1.522-3.463.915L8.3 6.316l3.463-.916zM4.319 9.583l-.562-2.07 2.484-.656L8.877 8.38 4.32 9.583zM19.5 18.75h-15v-7.5h15v7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
