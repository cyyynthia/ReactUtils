/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import FieldLayout from './Items/FieldLayout'
import TextInput from './Items/TextInput'

const TextField = React.memo(
  ({ className, title, note, error, value, type, disabled, onChange }) => {
    const id = React.useMemo(() => `c${Math.round(Math.random() * 10000)}`, [])
    return <FieldLayout className={className} title={title} note={note} disabled={disabled} id={id} error={error}>
      <TextInput
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        type={type}
      />
    </FieldLayout>
  }
)

TextField.displayName = 'TextField'
export default TextField
