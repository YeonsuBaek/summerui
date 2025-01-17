import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Racquet = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.563 2.442C18.938-.176 14.206.296 11.005 3.497c-2.98 2.98-3.593 7.29-1.548 9.983l-2.77 2.771-.065-.063a1.5 1.5 0 00-2.122 0L1.94 18.75a1.5 1.5 0 000 2.122l1.19 1.19a1.5 1.5 0 002.12 0L7.814 19.5a1.5 1.5 0 000-2.122l-.065-.064 2.772-2.771c1.058.804 2.366 1.199 3.75 1.199 2.13 0 4.43-.938 6.238-2.747 3.195-3.201 3.668-7.933 1.055-10.553zM4.19 21L3 19.81l2.562-2.56.594.594.594.594L4.19 21zM21.02 9.75h-2.265v-3h3a6.791 6.791 0 01-.734 3zm-8.271 4.276a4.14 4.14 0 01-2.776-2.776h2.776v2.776zm-3-4.276a6.772 6.772 0 01.737-3h2.263v3h-3zm4.5-3h3v3h-3v-3zm7.282-1.5h-2.776V2.464a4.147 4.147 0 012.78 2.78l-.004.006zm-4.296-3h.015v3h-3V2.977a6.795 6.795 0 012.99-.736l-.005.009zM12.75 3.943v1.301h-1.297a8.75 8.75 0 011.297-1.301zm1.5 10.305V11.25h3v2.265a6.773 6.773 0 01-2.995.735l-.005-.002zm4.5-1.7V11.25h1.313c-.193.24-.398.469-.615.686-.22.216-.45.42-.692.611h-.006z"
        fill={fillColor}
      />
    </svg>
  )
}
