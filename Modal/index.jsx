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
import ReactModal from 'react-modal'

import Button from '../Form/Button'
import style from './style.scss'

// Patch the modal
ReactModal.setAppElement('#react-root')
ReactModal.defaultStyles = {
  overlay: {},
  content: {}
}
ReactModal.defaultProps = {
  ...ReactModal.defaultProps,
  bodyOpenClassName: '',
  portalClassName: style.container,
  overlayClassName: {
    base: style.overlay,
    afterOpen: '',
    beforeClose: ''
  },
  className: {
    base: style.inner,
    afterOpen: '',
    beforeClose: ''
  },
  parentSelector: () => document.querySelector('#modal-container')
}

const Modal = React.memo(
  (props) => {
    const { className } = ReactModal.defaultProps
    if (props.maxSize) className.base += ` ${style.max}`

    return <ReactModal isOpen={props.isOpen} className={className}>
      <div className={style.header}>{props.header}</div>
      <div className={style.content}>{props.children}</div>
      {(props.cancel || props.ok) && <div className={style.footer}>
        {props.cancel &&
        <Button look={Button.Looks.OUTLINED} color={Button.Colors.RED} onClick={props.onCancel}>
          {props.cancel}
        </Button>}
        {props.confirm &&
        <Button look={Button.Looks.GHOST} color={Button.Colors.BRAND} onClick={props.onConfirm}>
          {props.confirm}
        </Button>}
      </div>}
    </ReactModal>
  }
)

Modal.displayName = 'Modal'
export default Modal
