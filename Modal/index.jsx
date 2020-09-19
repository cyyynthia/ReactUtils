/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
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
