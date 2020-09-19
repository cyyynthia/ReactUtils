/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import style from '../style/select.scss'

const Arrow = React.memo(() =>
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      fill='currentColor'
      d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z'
    />
  </svg>
)

const Select = React.memo(
  ({ selected, options, onChange, placeholder, className }) => {
    // State
    const [ focused, setFocused ] = React.useState(false)
    const handler = React.useCallback(() => setFocused(false), [])
    const parsedOptions = React.useMemo(
      () =>
        options.map(o => typeof o === 'object'
          ? o
          : { id: o, name: o })
      , [ options ])

    React.useEffect(() => {
      if (focused) {
        window.addEventListener('click', handler)
        return function cleanup () {
          window.removeEventListener('click', handler)
        }
      }
    })

    let classNames = style.container
    if (focused) classNames += ` ${style.focus}`
    classNames += ` ${className || ''}`
    classNames = classNames.replace(/ {2,}/g, ' ').trim()

    // Render
    return <div className={classNames}>
      <div className={style.field} onClick={() => setFocused(true)}>
        {selected && parsedOptions.find(o => o.id === selected)
          ? parsedOptions.find(o => o.id === selected).name
          : <span className={style.placeholder}>{placeholder || 'Choose an option...'}</span>}
        <Arrow/>
      </div>
      <div className={style.options}>
        <Scrollbars autoHeight autoHeightMax={210}>
          {parsedOptions.map(opt => <div className={style.option} key={opt.id} onClick={() => onChange(opt.id)}>
            {opt.name}
          </div>)}
        </Scrollbars>
      </div>
    </div>
  }
)

Arrow.displayName = 'Arrow'
Select.displayName = 'Select'
export default Select
