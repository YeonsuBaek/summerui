import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Club = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 8.25h-.218a5.251 5.251 0 00-9.24-4.637 5.25 5.25 0 00-.824 4.637H6.75a5.25 5.25 0 102.3 9.97l-.768 2.564A.75.75 0 009 21.75h6a.75.75 0 00.718-.966l-.769-2.564a5.25 5.25 0 102.301-9.97zm0 9a3.75 3.75 0 01-3.131-1.688.75.75 0 00-1.344.63l1.22 4.055H10.01l1.218-4.055a.75.75 0 00-1.347-.63 3.75 3.75 0 11-1.868-5.597.75.75 0 00.874-1.125 3.75 3.75 0 116.226 0 .75.75 0 00.874 1.125 3.75 3.75 0 111.263 7.285z"
        fill={fillColor}
      />
    </svg>
  )
}
