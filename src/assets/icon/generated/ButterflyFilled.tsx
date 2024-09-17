import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ButterflyFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 9.39a10.16 10.16 0 00-.75-1.184V5.25a.75.75 0 111.5 0v2.956A10.16 10.16 0 0012 9.39zm9.816-4.658c-.347-.448-1.018-.982-2.222-.982-1.58 0-3.606 1.058-5.42 2.827a13.13 13.13 0 00-1.424 1.629v8.669a.75.75 0 11-1.5 0v-8.67a13.129 13.129 0 00-1.42-1.628C8.015 4.807 5.989 3.75 4.406 3.75c-1.203 0-1.875.534-2.222.982-.639.823-1.141 2.258-.02 6.676.568 2.234 1.83 3.093 2.872 3.414A4.125 4.125 0 0012 19.244a4.125 4.125 0 006.964-4.422c1.042-.319 2.303-1.18 2.871-3.414.63-2.48 1.12-5.211-.02-6.675z"
        fill={fillColor}
      />
    </svg>
  )
}
