/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import field from '../style/field.scss'

const FieldLayout = React.memo(
  ({ className, title, children, checkbox, error, note, disabled, id: pId }) => {
    // State @todo: wipe this and ensure it doesn't break anything
    const id = React.useMemo(() => pId || `c${Math.round(Math.random() * 10000)}`, [ pId ])

    // Render
    const classNames = [ field.field ]
    error && classNames.push(field.error)
    checkbox && classNames.push(field.checkbox)
    disabled && classNames.push(field.disabled)
    className && classNames.push(className)

    return <div className={classNames.join(' ')}>
      <label className={field.label} htmlFor={id}>
        {checkbox && children}
        {title}
      </label>
      {!checkbox && children}
      {(note || error) && <div className={field.note}>{error || note}</div>}
    </div>
  }
)

FieldLayout.displayName = 'FieldLayout'
export default FieldLayout
