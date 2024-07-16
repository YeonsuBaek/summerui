import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Certificate = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 12.75a.75.75 0 01-.75.75h-4.5a.75.75 0 110-1.5h4.5a.75.75 0 01.75.75zM11.25 9h-4.5a.75.75 0 000 1.5h4.5a.75.75 0 100-1.5zm10.5 6.138V21a.75.75 0 01-1.125.656l-2.25-1.288-2.25 1.288A.75.75 0 0115 21v-2.25H3.75a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v2.862a4.865 4.865 0 010 7.026zM15 17.25v-2.112a4.875 4.875 0 015.25-8.013V5.25H3.75v12H15zm5.25-1.125a4.863 4.863 0 01-3.75 0v3.583l1.5-.859a.75.75 0 01.744 0l1.5.86.006-3.584zm1.5-4.5a3.375 3.375 0 10-6.75 0 3.375 3.375 0 006.75 0z"
        fill={fillColor}
      />
    </svg>
  )
}
