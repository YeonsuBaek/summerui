import { BirdIcon, CatIcon, FlowerIcon, MoonStarsIcon, PlanetIcon, SunIcon } from '.'
import {
  arrowIcons,
  commerceIcons,
  communicationIcons,
  designIcons,
  educationIcons,
  gameIcons,
  mathIcons,
  mediaIcons,
  natureIcons,
  officeIcons,
  securityIcons,
  systemIcons,
  timeIcons,
  travelIcons,
} from './IconSet'

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

export const Arrow = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(arrowIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export const System = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(systemIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Media = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(mediaIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export const Communication = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(communicationIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export const Design = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(designIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Education = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(educationIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Travel = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(travelIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Office = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(officeIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Security = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(securityIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}
export const Time = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(timeIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}

export const Nature = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(natureIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Commerce = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(commerceIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Game = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(gameIcons)
        .sort()
        .map(([name, Component]) => {
          return (
            <div className="icon-item">
              <Component />
              <span>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export const Math = () => {
  return (
    <div className="storybook-icon">
      {Object.entries(mathIcons).map(([name, Component]) => {
        return (
          <div className="icon-item">
            <Component />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}
