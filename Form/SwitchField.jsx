/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import FieldLayout from './Items/FieldLayout'
import Switch from './Items/Switch'
import Checkbox from './Items/Checkbox'

const SwitchField = React.memo(
  ({ className, title, note, error, value, disabled, onChange }) => {
    const id = React.useMemo(() => `c${Math.round(Math.random() * 10000)}`, [])
    return <FieldLayout
      className={className}
      disabled={disabled}
      error={error}
      title={title}
      note={note}
      id={id}
      checkbox
    >
      <Switch value={value} disabled={disabled} onChange={onChange}/>
    </FieldLayout>
  }
)

SwitchField.displayName = 'SwitchField'
export default SwitchField
