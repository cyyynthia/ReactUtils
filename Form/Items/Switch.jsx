/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import style from '../style/switch.scss'

const Switch = React.memo(props => {
  let className = style.container
  if (props.small) className += ` ${style.small}`
  if (props.value) className += ` ${style.enabled}`
  if (props.disabled) className += ` ${style.disabled}`
  className += ` ${props.className || ''}`
  className = className.replace(/ {2,}/g, ' ').trim()

  const onChange = props.onChange || (() => void 0)
  return <div className={className}>
    <input
      id={props.id}
      type='checkbox'
      value={props.value}
      disabled={props.disabled}
      className={style.checkbox}
      onChange={() => onChange(!props.value)}
    />
  </div>
})

Switch.displayName = 'Switch'
export default Switch
