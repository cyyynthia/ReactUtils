/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'
import style from './style.scss'

const LoadingIndicator = React.memo(
  ({ balls, small, big }) => {
    if (balls) {
      return <div className={style.balls}>
        <div className={style.ball}/>
        <div className={style.ball}/>
        <div className={style.ball}/>
      </div>
    }

    let cls = style.spinner
    if (small) {
      cls += ` ${style.small}`
    } else if (big) {
      cls += ` ${style.big}`
    }

    return <svg viewBox='25 25 50 50' className={cls}>
      <circle cx='50' cy='50' r='20' className={`${style.path} ${style.dark}`}/>
      <circle cx='50' cy='50' r='20' className={`${style.path} ${style.light}`}/>
      <circle cx='50' cy='50' r='20' className={style.path}/>
    </svg>
  }
)

LoadingIndicator.displayName = 'LoadingIndicator'
export default LoadingIndicator
