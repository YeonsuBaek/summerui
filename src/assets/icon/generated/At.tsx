import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const At = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25a9.75 9.75 0 000 19.5c2.017 0 4.134-.608 5.665-1.625a.748.748 0 00.003-1.247.748.748 0 00-.833-.002c-1.273.847-3.128 1.374-4.835 1.374A8.25 8.25 0 1120.25 12c0 2.48-1.02 3-1.875 3s-1.875-.52-1.875-3V8.25a.75.75 0 10-1.5 0v.4a4.5 4.5 0 10.556 6.102c.562 1.125 1.533 1.748 2.819 1.748 2.113 0 3.375-1.682 3.375-4.5A9.76 9.76 0 0012 2.25zM12 15a3 3 0 110-5.999A3 3 0 0112 15z"
        fill={fillColor}
      />
    </svg>
  )
}
