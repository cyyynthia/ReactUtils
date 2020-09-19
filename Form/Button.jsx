/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
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
