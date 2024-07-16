import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WaveformSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M5.25 9v6a.75.75 0 11-1.5 0V9a.75.75 0 111.5 0zm-.195-5.754a.75.75 0 10-1.11 1.008L7.5 8.164V21A.75.75 0 109 21V9.815l2.25 2.475V18a.75.75 0 101.5 0v-4.06l6.195 6.814a.75.75 0 101.11-1.008l-15-16.5zm3.195.92a.75.75 0 00.75-.75V3a.75.75 0 00-1.5 0v.415a.75.75 0 00.75.75zM12 8.29a.75.75 0 00.75-.75V6a.75.75 0 10-1.5 0v1.54a.75.75 0 00.75.75zm3.75 4.125a.75.75 0 00.75-.75V9A.75.75 0 1015 9v2.665a.75.75 0 00.75.75zM19.5 6.75a.75.75 0 00-.75.75v8.29a.75.75 0 101.5 0V7.5a.75.75 0 00-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
