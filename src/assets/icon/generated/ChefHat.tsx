import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChefHat = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 10.5a5.256 5.256 0 00-5.746-5.226 5.25 5.25 0 00-9.508 0A5.25 5.25 0 004.5 15.242V19.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5v-4.257a5.258 5.258 0 003-4.743zm-4.5 9H6v-3.804a5.2 5.2 0 00.75.054h10.5a5.2 5.2 0 00.75-.054V19.5zm-.75-5.25h-1.289l.516-2.068a.75.75 0 00-1.454-.364l-.609 2.432H12.75V12a.75.75 0 00-1.5 0v2.25H9.586l-.608-2.432a.75.75 0 10-1.455.364l.516 2.068H6.75a3.75 3.75 0 110-7.5h.054a5.176 5.176 0 00-.054.75.75.75 0 101.5 0 3.75 3.75 0 117.5 0 .75.75 0 101.5 0c0-.25-.018-.502-.054-.75h.054a3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
