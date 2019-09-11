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
