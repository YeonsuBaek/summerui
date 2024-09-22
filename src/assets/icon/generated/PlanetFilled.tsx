import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PlanetFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.979 5.689c-.717-1.237-2.61-1.515-5.484-.812a9 9 0 00-14.42 8.276c-2.598 2.69-2.56 4.284-2.053 5.158C1.5 19.14 2.497 19.5 3.81 19.5a11.632 11.632 0 002.699-.375 9 9 0 0014.417-8.273c1.173-1.22 1.953-2.377 2.218-3.368.184-.686.129-1.29-.165-1.795zm-1.283 1.406c-.573 2.136-4.561 5.373-8.205 7.466-6.358 3.657-10.652 3.893-11.172 3-.137-.235-.06-.678.208-1.218.267-.506.59-.98.964-1.411.159.458.354.902.584 1.329a.375.375 0 00.375.199 11.45 11.45 0 001.59-.312c1.99-.52 4.37-1.544 6.704-2.885 2.334-1.34 4.407-2.874 5.855-4.327.381-.377.735-.78 1.06-1.206a.375.375 0 00.016-.424 9.035 9.035 0 00-.853-1.168c1.332-.22 2.566-.204 2.86.304.086.147.09.367.014.654v-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
