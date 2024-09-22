import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EyeSlashFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M9.064 5.425a.375.375 0 01.195-.618A12.2 12.2 0 0112 4.5c3.27 0 6.24 1.243 8.593 3.595 1.765 1.766 2.56 3.527 2.592 3.601a.749.749 0 010 .61c-.032.074-.827 1.834-2.592 3.6-.267.266-.542.518-.824.756a.375.375 0 01-.52-.034L9.064 5.425zm10.991 14.32a.751.751 0 11-1.11 1.01l-2.07-2.274A11.926 11.926 0 0112 19.5c-3.27 0-6.24-1.243-8.593-3.594C1.642 14.14.844 12.38.815 12.306a.75.75 0 010-.61c.029-.071.827-1.835 2.592-3.6A12.656 12.656 0 015.75 6.24L3.945 4.254a.75.75 0 111.11-1.008l15 16.5zm-6.14-4.523l-4.94-5.437a3.75 3.75 0 004.94 5.437z"
        fill={fillColor}
      />
    </svg>
  )
}
