import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaintBucketFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M24 19.5a2.25 2.25 0 11-4.5 0c0-1.68 1.46-3.916 1.626-4.166a.75.75 0 011.248 0C22.54 15.584 24 17.82 24 19.5zm-11.58-7.83a1.127 1.127 0 10-1.593-1.593 1.125 1.125 0 001.594 1.588v.006zM3.53 1.72a.75.75 0 00-1.06 1.06l3.056 3.057 1.06-1.056L3.53 1.72zm18.457 11.318a.75.75 0 00.294-1.241L11.453.969a.75.75 0 00-1.06 0L6.586 4.781l3.79 3.79a2.625 2.625 0 11-1.06 1.06l-3.79-3.794-4.12 4.116a2.25 2.25 0 000 3.182l7.959 7.959a2.25 2.25 0 003.182 0l7.358-7.359 2.082-.697z"
        fill={fillColor}
      />
    </svg>
  )
}
