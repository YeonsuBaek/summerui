import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BellSlashFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.797 18a.174.174 0 01-.28.026L7.806 4.05a.375.375 0 01.075-.562A7.458 7.458 0 0112.11 2.25c4.109.062 7.371 3.478 7.39 7.586.013 3.27.78 5.77 1.296 6.656A1.489 1.489 0 0120.798 18zm-.742 1.746a.75.75 0 01-1.11 1.008L17.12 18.75h-1.45a3.75 3.75 0 01-7.35 0H4.49a1.479 1.479 0 01-1.273-.712 1.54 1.54 0 01-.009-1.563c.52-.913 1.284-3.435 1.284-6.725a7.446 7.446 0 011.019-3.764L3.938 4.254a.75.75 0 111.11-1.008l15.007 16.5zm-5.937-.996H9.874a2.25 2.25 0 004.244 0z"
        fill={fillColor}
      />
    </svg>
  )
}
