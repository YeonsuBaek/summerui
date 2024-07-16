import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MapPin = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 6a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 6zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm0-10.5a8.26 8.26 0 00-8.25 8.25c0 2.944 1.36 6.064 3.938 9.023a23.837 23.837 0 003.885 3.591.75.75 0 00.861 0 23.835 23.835 0 003.879-3.59c2.573-2.96 3.937-6.08 3.937-9.024A8.26 8.26 0 0012 1.5zm0 19.313c-1.55-1.22-6.75-5.696-6.75-11.063a6.75 6.75 0 0113.5 0c0 5.365-5.2 9.844-6.75 11.063z"
        fill={fillColor}
      />
    </svg>
  )
}
