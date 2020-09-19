/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
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
