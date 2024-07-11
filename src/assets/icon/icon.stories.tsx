import { BirdIcon, CatIcon, FlowerIcon, MoonStarsIcon, PlanetIcon, SunIcon } from '.'

const meta = {
  title: 'Assets/Icon',
}

export default meta

export const Icon = () => {
  const exIcon = `
  <PlanetIcon />
  <FlowerIcon size={32} fillColor="red" />
  <BirdIcon size={40} fillColor="#54803F" />
  `

  return (
    <div className="storybook core-font">
      <h1>Icon</h1>
      <p>동작과 기능, 상징을 기호로 만들어 효율적으로 정보를 전달한다.</p>
      <h4>🍱 예시</h4>
      <div className="storybook-example">
        <CatIcon size={12} />
        <SunIcon size={16} />
        <PlanetIcon />
        <MoonStarsIcon size={24} />
        <FlowerIcon size={32} fillColor="red" />
        <BirdIcon size={40} fillColor="#54803F" />
      </div>
      <h4>🛠️ 사용법</h4>
      <p>원하는 아이콘 이름에 Icon 접미사를 붙인 컴포넌트를 사용한다.</p>
      <table>
        <thead>
          <tr>
            <th>props</th>
            <th>description</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>size</b>
            </td>
            <td></td>
            <td>12 | 16 | 20 | 24 | 32 | 40</td>
          </tr>
          <tr>
            <td>
              <b>fillColor</b>
            </td>
            <td></td>
            <td>
              <span>string</span>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>{exIcon}</pre>
    </div>
  )
}
