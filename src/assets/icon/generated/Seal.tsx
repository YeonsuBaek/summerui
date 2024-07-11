import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Seal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.174 9.64c-.353-.37-.719-.75-.857-1.085-.127-.307-.134-.815-.142-1.307-.014-.915-.03-1.952-.75-2.673-.72-.72-1.758-.736-2.673-.75-.492-.008-1-.015-1.307-.143-.334-.137-.715-.503-1.084-.856C13.713 2.204 12.979 1.5 12 1.5c-.979 0-1.713.704-2.36 1.326-.37.353-.75.719-1.085.857-.305.127-.815.135-1.307.142-.915.014-1.952.03-2.673.75-.72.72-.731 1.758-.75 2.673-.008.492-.015 1-.143 1.307-.137.334-.503.715-.856 1.084C2.204 10.286 1.5 11.021 1.5 12c0 .979.704 1.713 1.326 2.36.353.37.719.75.857 1.085.127.307.135.815.142 1.307.014.915.03 1.952.75 2.673.72.72 1.758.736 2.673.75.492.008 1 .015 1.307.142.333.138.715.504 1.084.857.648.622 1.382 1.326 2.361 1.326.979 0 1.713-.704 2.36-1.326.37-.353.75-.719 1.085-.857.307-.127.815-.134 1.307-.142.915-.014 1.952-.03 2.673-.75.72-.72.736-1.758.75-2.673.008-.492.015-1 .142-1.307.138-.333.504-.715.857-1.084.622-.647 1.326-1.382 1.326-2.361 0-.979-.704-1.713-1.326-2.36zm-1.082 3.683c-.45.469-.915.953-1.161 1.549-.236.571-.247 1.225-.256 1.858-.01.656-.02 1.343-.311 1.634-.292.29-.974.302-1.634.311-.633.01-1.287.02-1.858.256-.596.246-1.08.711-1.55 1.16-.468.45-.947.909-1.322.909-.375 0-.857-.461-1.323-.908-.466-.448-.953-.915-1.549-1.161-.571-.236-1.225-.247-1.858-.256-.656-.01-1.343-.02-1.634-.311-.29-.292-.302-.974-.311-1.634-.01-.633-.02-1.287-.256-1.858-.247-.596-.712-1.08-1.16-1.55C3.458 12.855 3 12.376 3 12c0-.375.461-.857.908-1.323.448-.466.914-.953 1.161-1.549.236-.571.247-1.225.256-1.858.01-.656.02-1.343.311-1.634.292-.29.974-.302 1.634-.311.633-.01 1.287-.02 1.858-.256.596-.247 1.08-.712 1.55-1.16C11.145 3.458 11.624 3 12 3c.375 0 .857.461 1.323.908.466.448.953.914 1.549 1.161.571.236 1.225.247 1.858.256.656.01 1.343.02 1.634.311.29.292.302.974.311 1.634.01.633.02 1.287.256 1.858.246.596.711 1.08 1.16 1.55.45.468.909.947.909 1.322 0 .375-.461.857-.908 1.323z"
        fill={fillColor}
      />
    </svg>
  )
}