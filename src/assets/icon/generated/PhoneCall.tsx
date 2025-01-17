import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PhoneCall = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.525 4.306a.75.75 0 01.92-.53 8.083 8.083 0 015.78 5.78.75.75 0 11-1.45.387 6.596 6.596 0 00-4.718-4.718.75.75 0 01-.532-.92zm-.218 3.919c1.293.345 2.123 1.175 2.468 2.468a.75.75 0 101.45-.387c-.48-1.796-1.735-3.05-3.53-3.53a.75.75 0 00-.388 1.449zm7.682 8.939a5.274 5.274 0 01-5.239 4.586c-7.444 0-13.5-6.056-13.5-13.5a5.274 5.274 0 014.586-5.239 1.5 1.5 0 011.558.893l1.98 4.42v.011a1.5 1.5 0 01-.119 1.415 1.05 1.05 0 01-.053.072L8.25 12.136c.702 1.427 2.195 2.906 3.64 3.61l2.282-1.941a1.5 1.5 0 011.492-.184l.013.006 4.416 1.979a1.5 1.5 0 01.896 1.558zm-1.489-.188h-.01l-4.407-1.973-2.282 1.941a.79.79 0 01-.07.053 1.5 1.5 0 01-1.476.107c-1.756-.849-3.507-2.586-4.356-4.323a1.5 1.5 0 01.094-1.472.567.567 0 01.053-.072L9 8.92 7.031 4.514v-.011A3.769 3.769 0 003.75 8.25a12.013 12.013 0 0012 12 3.77 3.77 0 003.75-3.275v.001z"
        fill={fillColor}
      />
    </svg>
  )
}
