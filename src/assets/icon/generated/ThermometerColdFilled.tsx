import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerColdFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.335 7.286l-1.875.609 1.157 1.593a.75.75 0 11-1.213.882L20.25 8.776l-1.157 1.594a.75.75 0 01-1.213-.882l1.157-1.593-1.875-.609a.75.75 0 01.463-1.427l1.875.61V4.5a.75.75 0 111.5 0v1.969l1.875-.609a.75.75 0 01.464 1.427h-.004zM16.5 18a5.25 5.25 0 11-8.25-4.313V3.75a3 3 0 116 0v9.938A5.271 5.271 0 0116.5 18zm-8.923-.75h7.346a3.767 3.767 0 00-1.798-2.498.752.752 0 01-.375-.65V3.75a1.5 1.5 0 10-3 0v10.352a.75.75 0 01-.375.65 3.765 3.765 0 00-1.798 2.498z"
        fill={fillColor}
      />
    </svg>
  )
}
