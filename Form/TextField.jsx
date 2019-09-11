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
