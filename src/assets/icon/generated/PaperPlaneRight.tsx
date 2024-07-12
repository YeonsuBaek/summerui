import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaperPlaneRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.738 10.688l-15.75-8.99A1.5 1.5 0 003.836 3.5L6.708 12l-2.872 8.5a1.5 1.5 0 002.157 1.803l15.743-9.005a1.5 1.5 0 00.005-2.614l-.003.004zM5.25 21v-.011l2.788-8.239H13.5a.75.75 0 100-1.5H8.038L5.256 3.015A.043.043 0 005.25 3L21 11.984 5.25 21z"
        fill={fillColor}
      />
    </svg>
  )
}
