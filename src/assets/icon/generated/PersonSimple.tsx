import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PersonSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 7.5a3 3 0 100-6 3 3 0 000 6zM12 3a1.5 1.5 0 110 2.999A1.5 1.5 0 0112 3zm9.643 9.386a.75.75 0 01-1.031.257c-.033-.02-3.292-1.93-7.864-2.125v3.45l5.813 6.538a.75.75 0 11-1.125.996L12 15.375l-5.438 6.123a.75.75 0 11-1.125-.996l5.813-6.533v-3.452c-4.594.195-7.83 2.106-7.864 2.126a.749.749 0 11-.771-1.286C2.775 11.26 6.605 9 12 9s9.225 2.26 9.386 2.357a.749.749 0 01.257 1.03z"
        fill={fillColor}
      />
    </svg>
  )
}
