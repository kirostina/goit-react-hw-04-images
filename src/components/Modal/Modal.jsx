import React, {useEffect} from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = ({ closeModal, tags, modalImage }) => {
    useEffect(() => {
        const closeByEsc = e => {
            if (e.code === 'Escape') {
                closeModal();
            }
        }
        window.addEventListener('keydown', closeByEsc);
        return () => {
            window.removeEventListener('keydown', closeByEsc);
        };
    }, [closeModal]);

        return (
            <StyledOverlay onClick={closeModal}>
                <StyledModal>
                    <img src={modalImage} alt={tags} />
                </StyledModal>
            </StyledOverlay>
        );
    }

