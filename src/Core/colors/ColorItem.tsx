interface ColorItemProps {
  name: string
  mode?: 'light' | 'dark'
}

const ColorItem = ({ name, mode = 'light' }: ColorItemProps) => {
  return (
    <li
      key={name}
      className={`core-color-item ${mode}`}
      style={{ listStyleType: 'none', padding: '4px', width: '160px' }}
    >
      <span>{name}</span>
    </li>
  )
}

export default ColorItem
