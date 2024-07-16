import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleFour = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm3-6.75h-.75v-6a.75.75 0 00-1.342-.46l-5.25 6.75A.75.75 0 008.25 15h4.5v1.5a.75.75 0 101.5 0V15H15a.75.75 0 100-1.5zm-2.25 0H9.784l2.966-3.814V13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
