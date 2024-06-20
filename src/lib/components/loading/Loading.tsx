import React from 'react'
import { LoadingProps } from '.'

const Loading = ({ size = 'medium', message = '' }: LoadingProps) => {
  return (
    <div className={`ui-loading ${size}`}>
      <div className="ui-loading-list">
        <i className="ui-loading-item"></i>
        <i className="ui-loading-item"></i>
        <i className="ui-loading-item"></i>
        <i className="ui-loading-item"></i>
      </div>
      {message && <span className="ui-loading-message">{message}</span>}
    </div>
  )
}

export default Loading
