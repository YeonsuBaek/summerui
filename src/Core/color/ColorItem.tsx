interface ColorItemProps {
  name: string
  mode?: 'light' | 'dark'
  type?: 'primary' | 'danger' | 'warning' | 'success' | 'information' | 'neutral'
}

const ColorItem = ({ name, mode = 'light', type = 'primary' }: ColorItemProps) => {
  return (
    <li
      key={name}
      className={`core-color-item ${mode} ${type}`}
      style={{ listStyleType: 'none', padding: '4px', width: '160px' }}
    >
      {name}
    </li>
  )
}

export default ColorItem
