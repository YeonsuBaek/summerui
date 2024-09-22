import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ExamFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M9 10.677l1.037 2.073H7.963L9 10.677zM21.75 5.25v15a.75.75 0 01-1.086.671L18 19.588l-2.664 1.333a.75.75 0 01-.672 0L12 19.588l-2.664 1.333a.75.75 0 01-.672 0L6 19.588l-2.664 1.333a.75.75 0 01-1.086-.671v-15a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5zm-9.079 9.414l-3-6a.75.75 0 00-1.342 0l-3 6a.75.75 0 101.342.672l.542-1.086h3.574l.542 1.086a.75.75 0 101.342-.672zM19.5 12a.75.75 0 00-.75-.75h-1.5v-1.5a.75.75 0 10-1.5 0v1.5h-1.5a.75.75 0 100 1.5h1.5v1.5a.75.75 0 101.5 0v-1.5h1.5a.75.75 0 00.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
