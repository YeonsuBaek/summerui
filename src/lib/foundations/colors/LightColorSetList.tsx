import React from 'react'
import ColorItem from './ColorItem'
import {
  DUST_RED,
  SUNSET_ORANGE,
  VOLCANO,
  POLAR_GREEN,
  CYAN,
  DAYBREAK_BLUE,
  GOLDEN_PURPLE,
  MAGENTA,
  NEUTRAL,
  ColorType,
} from './ColorSet'

const LightColors = () => {
  return (
    <ul className="ui-colors-set">
      <li>
        <h2>Dust Red</h2>
        <ul className="ui-colors-list">
          {DUST_RED.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Volcano</h2>
        <ul className="ui-colors-list">
          {VOLCANO.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Sunset Orange</h2>
        <ul className="ui-colors-list">
          {SUNSET_ORANGE.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Polar Green</h2>
        <ul className="ui-colors-list">
          {POLAR_GREEN.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Cyan</h2>
        <ul className="ui-colors-list">
          {CYAN.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Daybreak Blue</h2>
        <ul className="ui-colors-list">
          {DAYBREAK_BLUE.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Golden Purple</h2>
        <ul className="ui-colors-list">
          {GOLDEN_PURPLE.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Magenta</h2>
        <ul className="ui-colors-list">
          {MAGENTA.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
      <li>
        <h2>Neutral</h2>
        <ul className="ui-colors-list">
          {NEUTRAL.map(({ name, light }: ColorType) => (
            <ColorItem name={name} color={light} mode="light" />
          ))}
        </ul>
      </li>
    </ul>
  )
}

export { LightColors }
