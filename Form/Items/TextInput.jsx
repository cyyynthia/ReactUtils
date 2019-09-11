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
