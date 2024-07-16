import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Exam = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 3.75H3.75a1.5 1.5 0 00-1.5 1.5v15a.75.75 0 001.086.671L6 19.588l2.664 1.333a.75.75 0 00.672 0L12 19.588l2.664 1.333a.75.75 0 00.672 0L18 19.588l2.664 1.333a.75.75 0 001.086-.671v-15a1.5 1.5 0 00-1.5-1.5zm0 15.287l-1.914-.958a.75.75 0 00-.672 0L15 19.412l-2.664-1.333a.75.75 0 00-.672 0L9 19.412l-2.664-1.333a.75.75 0 00-.672 0l-1.914.958V5.25h16.5v13.787zM5.664 15.67a.75.75 0 001.007-.335l.542-1.086h3.574l.542 1.086a.75.75 0 101.342-.672l-3-6a.75.75 0 00-1.342 0l-3 6a.75.75 0 00.335 1.007zM9 10.677l1.037 2.073H7.963L9 10.677zM12.75 12a.75.75 0 01.75-.75H15v-1.5a.75.75 0 111.5 0v1.5H18a.75.75 0 110 1.5h-1.5v1.5a.75.75 0 11-1.5 0v-1.5h-1.5a.75.75 0 01-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
