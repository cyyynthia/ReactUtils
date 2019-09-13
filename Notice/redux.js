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

export const pushNotice = (id, type, text, button) => ({
  type: '@ReactUtils/PUSH_NOTICE', notice: { id, type, text, button }
})

export const dismissNotice = (id) => ({ type: '@ReactUtils/DISMISS_NOTICE', id })

export const reducer = (action, state) => {
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
