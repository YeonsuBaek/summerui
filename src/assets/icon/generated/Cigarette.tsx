import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Cigarette = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 12H3a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 003 18h18a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0021 12zM3 13.5h4.5v3H3v-3zm18 3H9v-3h12v3zM18.844 5.632c.75-1.334.695-2.035.596-2.335a.73.73 0 00-.248-.362.75.75 0 11.61-1.37 2.117 2.117 0 011.061 1.26c.315.95.076 2.142-.712 3.542-.75 1.335-.696 2.037-.597 2.336a.73.73 0 00.248.362.75.75 0 11-.61 1.37 2.116 2.116 0 01-1.06-1.26c-.313-.95-.074-2.144.712-3.543zm-3.75 0c.75-1.334.695-2.035.596-2.335a.73.73 0 00-.247-.362.75.75 0 11.609-1.37 2.117 2.117 0 011.061 1.26c.315.95.076 2.142-.712 3.542-.75 1.335-.696 2.037-.597 2.336a.73.73 0 00.248.362.75.75 0 11-.61 1.37 2.116 2.116 0 01-1.06-1.26c-.313-.95-.074-2.144.712-3.543z"
        fill={fillColor}
      />
    </svg>
  )
}
