/**
 * Some personal React and Redux utilities
 * Copyright (C) 2019 Bowser65
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
