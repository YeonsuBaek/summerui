import ColorItem from './ColorItem'

interface ColorType {
  name: string
}

const COLOR_LIST: ColorType[] = [
  {
    name: 'Primary-Color-01',
  },
  {
    name: 'Primary-Color-02',
  },
  {
    name: 'Primary-Color-03',
  },
  {
    name: 'Primary-Color-04',
  },
  {
    name: 'Primary-Color-05',
  },
  {
    name: 'Primary-Color-06',
  },
  {
    name: 'Primary-Color-07',
  },
  {
    name: 'Primary-Color-08',
  },
  {
    name: 'Primary-Color-09',
  },
  {
    name: 'Primary-Color-10',
  },
]

const LightColors = () => {
  return (
    <div>
      <h2>Light Color</h2>
      <ul style={{ padding: '0px' }}>
        {COLOR_LIST.map(({ name }: ColorType) => (
          <ColorItem name={name} />
        ))}
      </ul>
    </div>
  )
}

export { LightColors }
