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
