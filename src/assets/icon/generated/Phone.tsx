import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Phone = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.847 14.856l-4.416-1.98-.013-.005a1.501 1.501 0 00-1.492.184L12.644 15c-1.446-.702-2.938-2.183-3.64-3.61l1.948-2.317a1.499 1.499 0 00.177-1.484v-.011L9.144 3.154a1.5 1.5 0 00-1.558-.893A5.274 5.274 0 003 7.5C3 14.944 9.056 21 16.5 21a5.274 5.274 0 005.239-4.586 1.5 1.5 0 00-.892-1.558zM16.5 19.5a12.013 12.013 0 01-12-12 3.769 3.769 0 013.27-3.75v.011l1.968 4.406-1.938 2.32a.566.566 0 00-.053.072 1.5 1.5 0 00-.094 1.472c.85 1.737 2.6 3.474 4.355 4.323a1.5 1.5 0 001.477-.107.804.804 0 00.07-.053l2.278-1.944 4.407 1.973h.01A3.77 3.77 0 0116.5 19.5z"
        fill={fillColor}
      />
    </svg>
  )
}
