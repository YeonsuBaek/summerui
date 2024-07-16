import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PushPin = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.061 7.628l-5.69-5.688a1.5 1.5 0 00-2.121 0L9.222 6.983c-1-.313-3.281-.69-5.662 1.232a1.5 1.5 0 00-.121 2.23l4.53 4.528-4 3.996a.75.75 0 101.062 1.062l3.996-4 4.527 4.527a1.5 1.5 0 001.062.442h.106a1.493 1.493 0 001.09-.593c1.842-2.447 1.665-4.437 1.237-5.625l5.013-5.032a1.5 1.5 0 000-2.122zM21 8.69l-5.37 5.387a.75.75 0 00-.139.864c.887 1.775-.168 3.618-.875 4.558L4.5 9.383c1.133-.914 2.216-1.155 3.045-1.155a3.762 3.762 0 011.531.303.75.75 0 00.867-.141L15.311 3 21 8.689z"
        fill={fillColor}
      />
    </svg>
  )
}
