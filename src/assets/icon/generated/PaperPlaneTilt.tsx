import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaperPlaneTilt = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.311 2.689a1.5 1.5 0 00-1.468-.383h-.014L1.835 7.766A1.5 1.5 0 001.6 10.56l7.962 3.877 3.871 7.957a1.487 1.487 0 001.484.85 1.489 1.489 0 001.312-1.079l5.456-17.994v-.014a1.5 1.5 0 00-.375-1.468zm-6.514 19.047l-.005.013v-.006l-3.756-7.716 4.5-4.5a.75.75 0 00-1.06-1.06l-4.5 4.5L2.257 9.21h-.006.013L20.25 3.75l-5.453 17.986z"
        fill={fillColor}
      />
    </svg>
  )
}
