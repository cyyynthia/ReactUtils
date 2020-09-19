/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

export const pushNotice = (id, type, text, button) => ({
  type: '@ReactUtils/PUSH_NOTICE', notice: { id, type, text, button }
})

export const dismissNotice = (id) => ({ type: '@ReactUtils/DISMISS_NOTICE', id })

export const reducer = (state, action) => {
  switch (action.type) {
    case '@ReactUtils/PUSH_NOTICE':
      return { ...state, notices: [ action.notice, ...state.notices ] }
    case '@ReactUtils/DISMISS_NOTICE':
      // eslint-disable-next-line no-case-declarations
      const { notices } = state
      if (action.id) {
        return { ...state, notices: notices.filter(n => n.id !== action.id) }
      }

      notices.sort(n => n.noDismiss ? 1 : -1).shift()
      return { ...state, notices }
    default:
      return state
  }
}
