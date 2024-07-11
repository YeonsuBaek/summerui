import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MaskHappy = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.344 3.262a1.495 1.495 0 00-1.39-.16c-1.315.512-3.97 1.37-6.954 1.37-2.983 0-5.64-.858-6.957-1.37A1.5 1.5 0 003 4.5v5.228c0 3.36.905 6.53 2.548 8.923 1.703 2.481 3.994 3.844 6.452 3.844 2.458 0 4.75-1.366 6.452-3.844C20.095 16.26 21 13.091 21 9.731V4.5a1.5 1.5 0 00-.656-1.238zm-.844 6.47c0 3.06-.812 5.927-2.285 8.074C15.801 19.866 13.95 21 12 21c-1.95 0-3.8-1.134-5.215-3.195C5.312 15.656 4.5 12.79 4.5 9.73V4.5c1.417.55 4.273 1.473 7.5 1.473 3.227 0 6.084-.923 7.5-1.473v5.232zM17.812 11.5a.752.752 0 11-1.125 1c-.25-.282-.83-.5-1.312-.5-.483 0-1.065.22-1.313.5a.753.753 0 11-1.124-1c.535-.599 1.513-1 2.437-1 .924 0 1.898.401 2.438 1zm-9.187.5c-.487 0-1.065.22-1.313.5a.753.753 0 11-1.125-1c.54-.599 1.517-1 2.438-1 .92 0 1.898.401 2.438 1a.753.753 0 01-1.126 1c-.247-.28-.825-.5-1.312-.5zm7.167 4.236a4.96 4.96 0 01-7.584 0 .75.75 0 111.14-.974 3.459 3.459 0 005.303 0 .75.75 0 011.141.974z"
        fill={fillColor}
      />
    </svg>
  )
}
