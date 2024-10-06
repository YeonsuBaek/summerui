import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DogFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.473 11.719l-1.54-8.25a1.5 1.5 0 00-1.838-1.18l-.03.009-4.923 1.452H9.858L4.934 2.302l-.029-.008a1.5 1.5 0 00-1.838 1.18l-1.54 8.245a1.478 1.478 0 00.855 1.642c.198.09.412.138.63.139.26 0 .514-.07.738-.203v3.953A3.75 3.75 0 007.5 21h9a3.75 3.75 0 003.75-3.75v-3.952c.223.133.478.203.738.203.217 0 .432-.048.63-.138a1.479 1.479 0 00.855-1.644zM16.5 19.5h-3.75v-1.19l1.28-1.28a.75.75 0 10-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06l1.28 1.28v1.19H7.5a2.25 2.25 0 01-2.25-2.25v-5.709l4.868-6.291h3.764l4.868 6.291v5.709a2.25 2.25 0 01-2.25 2.25zm-6.75-6.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm6.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}