/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'

import FieldLayout from './Items/FieldLayout'
import Select from './Items/Select'

const SelectField = React.memo(
  ({ className, title, note, error, selected, options, disabled, onChange }) => {
    const id = React.useMemo(() => `c${Math.round(Math.random() * 10000)}`, [])
    return <FieldLayout
        className={className}
        disabled={disabled}
        error={error}
        title={title}
        note={note}
        id={id}
        >
      <Select selected={selected} options={options} onChange={onChange}/>
    </FieldLayout>
  }
)

SelectField.displayName = 'SelectField'
export default SelectField
