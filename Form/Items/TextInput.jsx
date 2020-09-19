/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import style from '../style/textinput.scss'

const TextInput = React.memo(props => {
  let className = style.input
  className += ` ${props.className || ''}`
  className = className.replace(/ {2,}/g, ' ').trim()

  const onChange = React.useCallback((e) => (props.onChange || (() => void 0))(e.target.value), [ props.onChange ])
  return <input {...{ ...props, className, onChange }}/>
})

TextInput.displayName = 'TextInput'
TextInput.defaultProps = {
  type: 'text'
}
export default TextInput
