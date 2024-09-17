import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsDownUpFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.193 16.213a.75.75 0 01-.162.818l-3 3a.748.748 0 01-1.062 0l-3-3A.75.75 0 014.5 15.75h2.25V4.5a.75.75 0 011.5 0v11.25h2.25a.75.75 0 01.693.463zM20.03 6.97l-3-3a.749.749 0 00-1.062 0l-3 3A.75.75 0 0013.5 8.25h2.25V19.5a.75.75 0 101.5 0V8.25h2.25a.75.75 0 00.53-1.28z"
        fill={fillColor}
      />
    </svg>
  )
}
