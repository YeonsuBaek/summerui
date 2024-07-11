import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Warning = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.2 17.633L14.002 3.396a2.322 2.322 0 00-4.004 0L1.8 17.633a2.204 2.204 0 000 2.224A2.282 2.282 0 003.802 21h16.396a2.283 2.283 0 002-1.143 2.205 2.205 0 00.002-2.224zm-1.3 1.473a.797.797 0 01-.702.394H3.802a.796.796 0 01-.702-.394.712.712 0 010-.724L11.3 4.145a.821.821 0 011.406 0l8.198 14.237a.712.712 0 01-.003.724zM11.25 13.5V9.75a.75.75 0 111.5 0v3.75a.75.75 0 11-1.5 0zm1.875 3.375a1.126 1.126 0 11-2.251 0 1.126 1.126 0 012.251 0z"
        fill={fillColor}
      />
    </svg>
  )
}
