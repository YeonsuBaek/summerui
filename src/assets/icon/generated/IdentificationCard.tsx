import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const IdentificationCard = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.75 10.5a.75.75 0 01-.75.75h-3.75a.75.75 0 110-1.5H18a.75.75 0 01.75.75zM18 12.75h-3.75a.75.75 0 100 1.5H18a.75.75 0 100-1.5zm3.75-7.5v13.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5zm-1.5 13.5V5.25H3.75v13.5h16.5zm-7.524-3.188a.75.75 0 11-1.454.376c-.246-.962-1.224-1.688-2.273-1.688-1.049 0-2.026.726-2.273 1.688a.75.75 0 11-1.454-.376 3.735 3.735 0 011.612-2.188 3 3 0 114.23 0c.794.5 1.37 1.282 1.613 2.188h-.001zM9 12.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={fillColor}
      />
    </svg>
  )
}
