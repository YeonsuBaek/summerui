import React from 'react'
import { CardProps } from '.'

const Card = ({ id, title, info, image, size = 'medium', onClick }: CardProps) => {
  return (
    <figure id={id} className={`ui-card ${size}`} role="button" onClick={onClick}>
      <img className={`ui-card-image ${image ? '' : 'blank'}`} src={image} alt={title} />
      <figcaption className="ui-card-figcaption">
        <span className="ui-card-figcaption-title">{title}</span>
        {info && <span className="ui-card-figcaption-info">{info}</span>}
      </figcaption>
    </figure>
  )
}

export default Card
