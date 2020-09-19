/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

import React from 'react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'

import Button from '../Form/Button'

import style from './style.scss'

let Component = null
try {
  Component = require('react-intl').FormattedMessage
} catch (e) {}

const CookiesConsent = React.memo(
  ({ papers, i18n, localStorage, children }) => {
    const [ saidOk, setSaidOk0 ] = React.useState(localStorage.getItem('cookies-consent') === 'true')
    const setSaidOk = React.useCallback(() => {
      setSaidOk0(true)
      localStorage.setItem('cookies-consent', 'true')
    }, [])

    if (saidOk) return null
    /* eslint-disable react/display-name */
    return <div className={style.cookiesConsent}>
      <p>
        {i18n && Component
          ? <Component id={i18n} values={{ lnk: m => <Link to={papers}>{m}</Link> }}/>
          : children || <>
            Cookies help us deliver our Service. By using the website, you agree to our use of cookies, as described
            in our&nbsp;<Link to={papers}>Privacy Policy</Link>.
          </>}
      </p>
      <Button look={Button.Looks.GHOST} color={Button.Colors.BRAND} onClick={setSaidOk}>I agree</Button>
    </div>
    /* eslint-enable react/display-name */
  })

// React attributes
CookiesConsent.displayName = 'CookiesConsent'
CookiesConsent.defaultProps = {
  papers: '/legal/privacy',
  i18n: null
}
export default hot(module)(CookiesConsent)
