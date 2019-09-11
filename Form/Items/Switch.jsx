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
