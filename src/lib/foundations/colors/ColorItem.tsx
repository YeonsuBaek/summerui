import React from 'react'

interface ColorItemProps {
  name: string
  mode: 'light' | 'dark'
  color: string
}

const ColorItem = ({ name, mode, color }: ColorItemProps) => {
  return (
    <li key={name} className={`ui-colors-item ${mode}`} style={{ background: color }}>
      <span>{name}</span>
      <span>{color}</span>
    </li>
  )
}

export default ColorItem
