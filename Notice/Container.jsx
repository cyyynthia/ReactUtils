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
import { hot } from 'react-hot-loader'
import { useSelector } from 'react-redux'

import style from './style.scss'

const NoticeContainer = React.memo(
  () => {
    const notice = (useSelector(store => store.app && store.app.notices) || []).sort(n =>
      n.noDismiss
        ? 1
        : -1
    ).shift()
    if (!notice) return null

    const classNames = [ style.notice ]
    notice.color
      ? classNames.push(notice.color)
      : classNames.push(style.colorDark)

    return <Notice
      text={notice.text}
      color={notice.color}
      button={notice.button}
      noDismiss={notice.noDismiss}
    />
  }
)

NoticeContainer.displayName = 'NoticeContainer'
export default hot(module)(NoticeContainer)
