import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MicrophoneStage = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.75 1.5a6.756 6.756 0 00-6.69 7.633l-6.517 8.888a1.493 1.493 0 00.149 1.948l1.34 1.34a1.493 1.493 0 001.947.148l8.889-6.518c.292.04.587.06.882.061a6.75 6.75 0 000-13.5zM21 8.25a5.224 5.224 0 01-1.046 3.143l-7.346-7.347A5.25 5.25 0 0121 8.25zm-15.907 12L3.75 18.907l5.826-7.938a6.785 6.785 0 003.455 3.455L5.093 20.25zm5.407-12a5.22 5.22 0 011.046-3.142l7.345 7.345A5.25 5.25 0 0110.5 8.25zm-.22 5.47a.75.75 0 010 1.06l-.75.75a.75.75 0 11-1.06-1.06l.75-.75a.749.749 0 011.062-.002l-.002.001z"
        fill={fillColor}
      />
    </svg>
  )
}
