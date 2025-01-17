import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SpeakerHigh = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.58 2.326a.75.75 0 00-.79.082L7.242 7.5H3A1.5 1.5 0 001.5 9v6A1.5 1.5 0 003 16.5h4.242l6.548 5.092A.75.75 0 0015 21V3a.75.75 0 00-.42-.674zM3 9h3.75v6H3V9zm10.5 10.466l-5.25-4.083V8.617l5.25-4.083v14.932zm5.063-9.945a3.75 3.75 0 010 4.958.75.75 0 01-1.125-.992 2.25 2.25 0 000-2.974.75.75 0 011.125-.992zM23.25 12a7.49 7.49 0 01-1.91 5 .75.75 0 01-1.117-1 6 6 0 000-8 .751.751 0 01.884-1.18.75.75 0 01.233.18 7.484 7.484 0 011.91 5z"
        fill={fillColor}
      />
    </svg>
  )
}
