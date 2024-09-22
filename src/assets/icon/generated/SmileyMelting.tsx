import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SmileyMelting = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.5 13.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm-4.5-4.5a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zm6.844-3.562A9.75 9.75 0 004.733 18.5a.749.749 0 001.27-.748.75.75 0 00-.153-.253 8.25 8.25 0 1112.3 0 .75.75 0 101.117 1 9.75 9.75 0 00-.423-13.436zM14.25 15.75h-1.5c-2.038 0-4.5-1.672-4.5-3.75 0-.21.017-.42.052-.626a.75.75 0 10-1.48-.248A5.334 5.334 0 006.75 12c0 1.395.7 2.731 1.969 3.764 1.162.944 2.631 1.486 4.031 1.486h1.5a.75.75 0 010 1.5H9a2.25 2.25 0 000 4.5.75.75 0 100-1.5.75.75 0 110-1.5h5.25a2.25 2.25 0 100-4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
