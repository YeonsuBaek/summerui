import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Dress = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.128 19.66a.17.17 0 00-.01-.024l-4.264-9.08 1.922-3.018a1.5 1.5 0 00.01-1.56c-.008-.015-.019-.03-.028-.044L15.75 3.066V.75a.75.75 0 10-1.5 0v2.29l-.493.616a2.25 2.25 0 01-3.514 0L9.75 3.04V.75a.75.75 0 00-1.5 0v2.316L6.242 5.934l-.028.044a1.5 1.5 0 00.01 1.56l1.922 3.017-4.264 9.08A1.5 1.5 0 005.25 21.75h13.5a1.5 1.5 0 001.38-2.09h-.002zM7.5 6.75l1.54-2.197.031.04a3.75 3.75 0 005.858 0l.03-.04L16.5 6.75l-1.91 3H9.411l-1.912-3zm-2.25 13.5l4.225-9h5.048l4.227 9H5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
