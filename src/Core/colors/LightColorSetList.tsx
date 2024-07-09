import ColorItem from './ColorItem'
import { ColorType } from './ColorList'

interface LightColorsProps {
  list: ColorType[]
  type?: 'primary' | 'danger' | 'warning' | 'success' | 'information'
}

const LightColors = ({ list, type = 'primary' }: LightColorsProps) => {
  return (
    <div>
      <h3>Light Color</h3>
      <ul style={{ padding: '0px' }}>
        {list.map(({ name }: ColorType) => (
          <ColorItem name={name} type={type} />
        ))}
      </ul>
    </div>
  )
}

export { LightColors }
