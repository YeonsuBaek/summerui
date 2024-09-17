import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HandPointing = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.375 8.25c-.437 0-.868.109-1.252.318A2.625 2.625 0 0013.5 7.003V4.125a2.625 2.625 0 00-5.25 0v7.5l-.358-.575a2.627 2.627 0 00-4.542 2.637l.438.772c3.225 5.687 4.56 8.041 8.962 8.041A8.26 8.26 0 0021 14.25v-3.375a2.625 2.625 0 00-2.625-2.625zm1.125 6A6.758 6.758 0 0112.75 21c-3.528 0-4.485-1.688-7.657-7.283l-.44-.775v-.005a1.125 1.125 0 111.961-1.102l1.75 2.813a.75.75 0 001.386-.398V4.125a1.125 1.125 0 012.25 0V10.5a.75.75 0 101.5 0V9.375a1.125 1.125 0 112.25 0v1.875a.75.75 0 101.5 0v-.375a1.125 1.125 0 112.25 0v3.375z"
        fill={fillColor}
      />
    </svg>
  )
}
