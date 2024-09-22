import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PenNibFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.81 7.628l-6.438-6.44a1.5 1.5 0 00-2.122 0l-2.666 2.667-5.438 2.04a1.5 1.5 0 00-.956 1.158L3.243 18.734a.375.375 0 00.635.327l5.343-5.344a2.25 2.25 0 111.06 1.061l-5.343 5.344a.375.375 0 00.327.635l11.682-1.947a1.499 1.499 0 001.158-.952l2.04-5.445L22.81 9.75a1.5 1.5 0 000-2.122zm-3.31 3.31L13.061 4.5l2.25-2.25 6.439 6.439-2.25 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
