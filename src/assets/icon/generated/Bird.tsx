import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Bird = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.5 6.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm6 1.125a.749.749 0 01-.334.624L20.25 9.401v1.849A9.76 9.76 0 0110.5 21H2.25a1.5 1.5 0 01-1.17-2.438l.008-.01L9 9.058V7.21c0-3.134 2.512-5.694 5.598-5.709h.027a5.625 5.625 0 015.363 3.924l2.178 1.452a.75.75 0 01.334.624zm-2.102 0l-1.47-.98a.75.75 0 01-.31-.436A4.125 4.125 0 0014.625 3h-.02C12.34 3.011 10.5 4.898 10.5 7.208V9.33a.75.75 0 01-.173.48L2.25 19.5h2.522l6.65-7.98a.748.748 0 011.333.408.749.749 0 01-.18.552L6.727 19.5H10.5a8.26 8.26 0 008.25-8.25V9a.749.749 0 01.334-.624l1.314-.876z"
        fill={fillColor}
      />
    </svg>
  )
}
