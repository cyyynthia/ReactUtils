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
import style from './style/button.scss'

const Button = React.memo(props => {
  let className = style.button
  className += ` ${props.className || ''}`
  className += ` ${props.size || ''}`
  className += ` ${props.look || ''}`
  className += ` ${props.color || ''}`
  className = className.replace(/ {2,}/g, ' ').trim()

  const btnProps = {
    ...props,
    className,
    size: void 0,
    look: void 0,
    color: void 0
  }
  return props.type === 'div'
    ? <div {...btnProps}/>
    : <button {...btnProps}/>
})

// Constants
Button.Sizes = {
  SMALL: style.sizeSmall,
  MEDIUM: style.sizeMedium
}

Button.Looks = {
  FILLED: style.lookFilled,
  OUTLINED: style.lookOutlined,
  GHOST: style.lookGhost,
  LINK: style.lookLink
}

Button.Colors = {
  BRAND: style.colorBrand,
  BLURPLE: style.colorBlurple,
  GREEN: style.colorGreen,
  ORANGE: style.colorOrange,
  RED: style.colorRed,
  WHITE: style.colorWhite,
  BLACK: style.colorBlack
}

// React attributes
Button.displayName = 'Button'
Button.defaultProps = {
  type: 'button',
  size: Button.Sizes.MEDIUM,
  look: Button.Looks.FILLED,
  color: Button.Colors.BRAND
}
export default Button
