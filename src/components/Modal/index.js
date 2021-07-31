import React from 'react';
import {ModalContainer, Overlay} from './style';

export const Modal = ({children, handleClose}) => {
  return (
    <Overlay>
      <ModalContainer>
        <span onClick={handleClose}>&times;</span>
        {children}
      </ModalContainer>
    </Overlay>
  )
}