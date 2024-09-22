import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TextAUnderlineFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.943 11.25h-3.886L12 7.04l1.943 4.21zM20.25 3v18a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75h15a.75.75 0 01.75.75zM7.186 15.68a.75.75 0 00.995-.366l1.184-2.564h5.27l1.184 2.564a.75.75 0 001.362-.628l-4.5-9.75a.75.75 0 00-1.362 0l-4.5 9.75a.75.75 0 00.367.995zM18.75 18a.75.75 0 00-.75-.75H6a.75.75 0 100 1.5h12a.75.75 0 00.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
