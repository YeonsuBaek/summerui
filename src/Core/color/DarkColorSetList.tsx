import ColorItem from './ColorItem'
import { ColorType } from './ColorList'

interface DarkColorsProps {
  list: ColorType[]
  type?: 'primary' | 'danger' | 'warning' | 'success' | 'information' | 'neutral'
}

const DarkColors = ({ list, type = 'primary' }: DarkColorsProps) => {
  return (
    <div>
      <h3>Dark Color</h3>
      <ul style={{ padding: '0px' }}>
        {list.map(({ name }: ColorType) => (
          <ColorItem name={name} mode="dark" type={type} />
        ))}
      </ul>
    </div>
  )
}

export { DarkColors }
