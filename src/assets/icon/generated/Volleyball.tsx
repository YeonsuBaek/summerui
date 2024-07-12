import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Volleyball = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm7.663 12.804a8.25 8.25 0 01-8.765.355l1.535-2.659h7.781a8.17 8.17 0 01-.55 2.304zM8.543 4.51a8.21 8.21 0 012.27-.675 8.25 8.25 0 014.688 7.415h-3.068l-3.89-6.74zm11.672 6.74h-3.212a9.765 9.765 0 00-3.354-7.334 8.266 8.266 0 016.566 7.334zM7.245 5.262l1.604 2.78a9.763 9.763 0 00-4.674 6.57 8.245 8.245 0 013.07-9.35zm-1.723 11.84a8.25 8.25 0 014.077-7.76L11.134 12l-3.89 6.738a8.306 8.306 0 01-1.722-1.635zM12 20.25a8.203 8.203 0 01-3.457-.76l1.605-2.782a9.771 9.771 0 008.019.766A8.232 8.232 0 0112 20.25z"
        fill={fillColor}
      />
    </svg>
  )
}
