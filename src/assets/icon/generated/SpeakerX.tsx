import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SpeakerX = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M14.58 2.326a.75.75 0 00-.79.082L7.242 7.5H3A1.5 1.5 0 001.5 9v6A1.5 1.5 0 003 16.5h4.242l6.548 5.092A.75.75 0 0015 21V3a.75.75 0 00-.42-.674zM3 9h3.75v6H3V9zm10.5 10.466l-5.25-4.083V8.617l5.25-4.083v14.932zm9.53-5.747a.75.75 0 11-1.06 1.062l-1.72-1.72-1.72 1.72a.75.75 0 11-1.06-1.062L19.19 12l-1.72-1.72a.75.75 0 111.06-1.06l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06L21.31 12l1.72 1.72z"
        fill={fillColor}
      />
    </svg>
  )
}
