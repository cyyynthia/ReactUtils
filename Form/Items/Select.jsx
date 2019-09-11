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
import { Scrollbars } from 'react-custom-scrollbars'

import { Arrow } from '../../Icons'

import style from '../style/select.scss'

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
          {parsedOptions.map(option => <div className={style.option} key={option.id} onClick={() => onChange(option.id)}>
            {option.name}
          </div>)}
        </Scrollbars>
      </div>
    </div>
  }
)

Select.displayName = 'Select'
export default Select
