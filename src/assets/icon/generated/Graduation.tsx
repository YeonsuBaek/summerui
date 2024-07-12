import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Graduation = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.602 8.338l-11.25-6a.75.75 0 00-.704 0l-11.25 6a.75.75 0 000 1.324L3 11.05v4.54c0 .368.135.724.38.998C4.61 17.956 7.36 20.25 12 20.25a12.186 12.186 0 004.5-.821V22.5a.75.75 0 101.5 0v-3.796a10.84 10.84 0 002.62-2.116c.245-.274.38-.63.38-.998v-4.54l2.602-1.388a.75.75 0 000-1.324zM12 18.75c-4.057 0-6.443-1.982-7.5-3.16v-3.74l7.148 3.812a.75.75 0 00.704 0L16.5 13.45v4.345c-1.181.55-2.67.955-4.5.955zm7.5-3.164c-.45.499-.953.947-1.5 1.336V12.65l1.5-.8v3.736zm-1.875-4.435l-.02-.013-5.25-2.8a.75.75 0 00-.706 1.324L16.031 12 12 14.15 2.344 9 12 3.85 21.656 9l-4.031 2.15z"
        fill={fillColor}
      />
    </svg>
  )
}
