import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Balloon = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 1.5a8.26 8.26 0 00-8.25 8.25c0 2.197.881 4.633 2.356 6.516 1.132 1.444 2.484 2.437 3.929 2.914l-.974 2.275A.75.75 0 009.75 22.5h4.5a.75.75 0 00.69-1.045l-.971-2.275c1.444-.475 2.796-1.47 3.929-2.914 1.47-1.883 2.352-4.32 2.352-6.516A8.26 8.26 0 0012 1.5zM13.113 21h-2.226l.65-1.518a6.355 6.355 0 00.925 0l.65 1.518zm3.6-5.66C15.369 17.056 13.696 18 12 18c-1.696 0-3.37-.944-4.713-2.66-1.276-1.627-2.037-3.715-2.037-5.59a6.75 6.75 0 0113.5 0c0 1.875-.761 3.963-2.037 5.59zm-.094-5.6a.75.75 0 01-.858-.616 3.87 3.87 0 00-3.134-3.134.75.75 0 11.248-1.48 5.391 5.391 0 014.366 4.366.75.75 0 01-.617.864h-.005z"
        fill={fillColor}
      />
    </svg>
  )
}
