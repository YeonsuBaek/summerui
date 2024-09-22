import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CertificateFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 8.112V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5H15V21a.75.75 0 001.125.656l2.25-1.288 2.25 1.288A.75.75 0 0021.75 21v-5.862a4.865 4.865 0 000-7.026zM12 13.5H6.75a.75.75 0 110-1.5H12a.75.75 0 110 1.5zm0-3H6.75a.75.75 0 110-1.5H12a.75.75 0 110 1.5zm8.25 9.207l-1.5-.859a.75.75 0 00-.744 0l-1.5.86v-3.583a4.863 4.863 0 003.75 0l-.006 3.582zM18.375 15a3.375 3.375 0 110-6.75 3.375 3.375 0 010 6.75z"
        fill={fillColor}
      />
    </svg>
  )
}
