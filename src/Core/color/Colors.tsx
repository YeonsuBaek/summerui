import { ColorType } from './ColorList'

interface ColorsProps {
  list: ColorType[]
  type?: 'primary' | 'danger' | 'warning' | 'success' | 'information' | 'neutral'
}

const Colors = ({ list, type = 'primary' }: ColorsProps) => {
  return (
    <ul style={{ padding: '0px' }}>
      {list.map(({ name }: ColorType) => (
        <li
          key={name}
          className={`core-color-item ${type}`}
          style={{ listStyleType: 'none', padding: '4px', width: '160px' }}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export { Colors }
