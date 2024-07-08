import { DarkColors } from './DarkColorSetList'
import { LightColors } from './LightColorSetList'

const meta = {
  title: 'Foundation/Colors',
}

export default meta

export const PrimaryColor = () => {
  const exCustom = `
  :root {
    --primary-color: 222, 100%;
  }
  `

  const exName = `
  div {
    background-color: var(--Primary-Color-2);
  }
  `

  return (
    <>
      <h1>Primary Color</h1>
      <p>
        전반적인 UI 컴포넌트에 사용되는 색상이다.
        <br />
        서비스 특성에 맞도록 원하는 색상으로 커스텀할 수 있다.
      </p>
      <h2>🎨 예시</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors />
        <DarkColors />
      </div>
      <h2>🛠️ 사용법</h2>
      <p>
        <span>index.scss</span> 파일에 하단 코드와 같이 <span>--primary-color</span> 색상을 정의한다.
        <br />
        <b>HSL</b>값을 원칙으로 하며, H(hue, 색)와 S(saturation, 채도)를 커스텀 할 수 있다.
        <br />
        L(lightness, 명도)을 기준으로 팔레트가 구성된다.
        <br />
        기본 팔레트 색상은 하단 코드와 상단 팔레트 예시와 같다.
      </p>
      <pre style={{ backgroundColor: '#f0f0f0' }}>{exCustom}</pre>
      <p>팔레트 색상을 사용할 땐 변수명을 사용한다.</p>
      <pre style={{ backgroundColor: '#f0f0f0' }}>{exName}</pre>
      <h2>✨ 규칙</h2>
      <ul>
        <li>
          <b>5번</b>을 기본으로, 1~4번은 색조, 6~10번은 그림자로 사용한다.
        </li>
        <li>
          <b>5번</b>을 기본으로, Hover 또는 Focus인 경우 6번, Active인 경우 7번, 비활성화인 경우 <b>Gray 2번</b>을
          사용한다.
        </li>
      </ul>
    </>
  )
}
