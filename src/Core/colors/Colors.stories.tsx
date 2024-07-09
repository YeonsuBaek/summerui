import {
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  SYSTEM_DANGER_COLORS,
  SYSTEM_INFORMATION_COLORS,
  SYSTEM_SUCCESS_COLORS,
  SYSTEM_WARNING_COLORS,
} from './ColorList'
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
        <LightColors list={PRIMARY_COLORS} />
        <DarkColors list={PRIMARY_COLORS} />
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

export const NeutralColor = () => {
  const exName = `
  div {
    background-color: var(--Gray-Color-1);
  }
  h1 {
    color: var(--Gray-Color-10);
  }
  p {
    color: var(--Gray-Color-8);
  }
  `

  return (
    <>
      <h1>Neutral Color</h1>
      <p>
        정보 전달과 위계를 나타내는 색상이다.
        <br />
        텍스트는 가독성을 위해 배경과의 명암비를 고려해야 한다.
      </p>
      <h2>⚫️ 예시</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors list={NEUTRAL_COLORS} type="neutral" />
        <DarkColors list={NEUTRAL_COLORS} type="neutral" />
      </div>
      <h2>🛠️ 사용법</h2>
      <p>팔레트 색상을 사용할 땐 변수명을 사용한다.</p>
      <pre style={{ backgroundColor: '#f0f0f0' }}>{exName}</pre>
      <h2>✨ 규칙</h2>
      <ul>
        <li>기본 텍스트 색상은 8번, 타이틀 색상은 10번을 사용한다.</li>
        <li>기본 비활성화 색상은 3번, 텍스트 비활성화 색상은 6번을 사용한다.</li>
        <li>테두리 색상은 4~6번을 사용한다.</li>
        <li>배경 색상은 0~2번을 사용한다.</li>
      </ul>
    </>
  )
}

export const SystemColor = () => {
  const exName = `
  div {
    background-color: var(--Danger-Color-0);
    color: var(--Danger-Color-6);
    border-color: var(--Danger-Color-1);
  }
  `

  return (
    <>
      <h1>System Color</h1>
      <p>시스템 상태를 보여줄 때 사용하는 색상이다.</p>
      <h2>🔴 Danger</h2>
      <p>오류, 금지, 위험, 삭제, 불가</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors list={SYSTEM_DANGER_COLORS} type="danger" />
        <DarkColors list={SYSTEM_DANGER_COLORS} type="danger" />
      </div>
      <h2>🟡 Warning</h2>
      <p>주의</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors list={SYSTEM_WARNING_COLORS} type="warning" />
        <DarkColors list={SYSTEM_WARNING_COLORS} type="warning" />
      </div>
      <h2>🟢 Success</h2>
      <p>성공, 진행</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors list={SYSTEM_SUCCESS_COLORS} type="success" />
        <DarkColors list={SYSTEM_SUCCESS_COLORS} type="success" />
      </div>
      <h2>🔵 Information</h2>
      <p>정보, 강조</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <LightColors list={SYSTEM_INFORMATION_COLORS} type="information" />
        <DarkColors list={SYSTEM_INFORMATION_COLORS} type="information" />
      </div>
      <h2>🛠️ 사용법</h2>
      <p>팔레트 색상을 사용할 땐 변수명을 사용한다.</p>
      <pre style={{ backgroundColor: '#f0f0f0' }}>{exName}</pre>
      <h2>✨ 규칙</h2>
      <ul>
        <li>
          <b>5번</b>을 기본으로, 6번은 텍스트, 0번은 배경, 1번은 테두리로 사용한다.
        </li>
      </ul>
    </>
  )
}
