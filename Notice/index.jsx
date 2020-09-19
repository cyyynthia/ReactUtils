/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'
import { hot } from 'react-hot-loader'
import { useDispatch } from 'react-redux'

import style from './style.scss'
import { dismissNotice } from '@react-utils/Notice/redux'

const Notice = React.memo(
  ({ color, text, button, noDismiss }) => {
    const dispatch = useDispatch()
    const dismiss = () => dispatch(dismissNotice())

    const classNames = [ style.notice ]
    color ? classNames.push(color) : classNames.push(style.colorDark)

    return <div className={classNames.join(' ')}>
      {text}
      {button && <button className={style.button} onClick={dismiss() || button.callback}>{button.text}</button>}
      {!noDismiss && <span className={style.dismiss} onClick={dismiss}/>}
    </div>
  }
)

Notice.Colors = {
  BRAND: style.colorBrand,
  GRADIENT: style.colorGradient,
  GREEN: style.colorGreen,
  ORANGE: style.colorOrange,
  RED: style.colorRed,
  BLUE: style.colorBlue,
  BLURPLE: style.colorBlurple,
  DARK: style.colorDark
}

Notice.displayName = 'Notice'
export default hot(module)(Notice)
