import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Rewind = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.978 5.438a1.5 1.5 0 00-1.523.05L12 10.231V6.735a1.492 1.492 0 00-2.295-1.25l-8.268 5.264a1.481 1.481 0 000 2.502l8.268 5.265A1.49 1.49 0 0012 17.265v-3.497l7.455 4.748a1.49 1.49 0 002.295-1.251V6.735a1.484 1.484 0 00-.772-1.298zM10.5 17.242L2.267 12 10.5 6.756v10.487zm9.75 0L12.017 12l8.233-5.244v10.487z"
        fill={fillColor}
      />
    </svg>
  )
}
